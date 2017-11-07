import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../../../fun/reducers';
import { Store} from '@ngrx/store';
import { Project} from '../../../../fun/domain';
import { Observable} from 'rxjs/Observable';
import * as projectActions from '../../../../fun/actions/project.action';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, FormArray} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  position$: Observable<Project[]>;
  form: FormGroup;

  constructor(private store$: Store<fromRoot.State>, private fb: FormBuilder, private router: Router) {
    this.store$.dispatch( new projectActions.LoadProjectsAction({}));

  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [ Validators.email, Validators.required]],
      account : ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      username : ['', Validators.required],
      password : ['', Validators.required],
      repeat: ['', Validators.required],
      position: [],
      keywords: this.fb.array([
        this.createKeywordGroup()
      ])

    }, {
      validator: this.equalRepeatAndPassword('password', 'repeat')
    });
    this.position$ = this.store$.select(fromRoot.getProjects);
    this.position$.subscribe( (val: Project[]) => {
      this.form.controls['position'].setValue(val[0]);
    });
  }
  equalRepeatAndPassword(password: string, repeat: string): ValidatorFn {
    return (group: FormGroup): {[key: string]: any} => {
      const passwordValue = group.get(repeat).value;
      const repeatpasswordValue = group.get(repeat).value;
      if (passwordValue !== repeatpasswordValue ) {
        return {
          notEuqalPassword: '密码不相同'
        };
      } else {
        return null;
      }
    };
  }
  validateUserName(c: FormControl): {[key: string]: any}  {
    return  null;
 }
  onSubmit({value, valid}, event: Event) {
    this.router.navigateByUrl('/start');
  }
  addKeywordGroup() {
    (<FormArray>this.form.controls['keywords']).push(this.createKeywordGroup());
  }
  addKeyword(index: string | number) {

    const formarray =  (<FormArray>this.form.controls['keywords']);
    const group = <FormGroup>formarray.controls[index];
    (<FormArray>group.controls['words']).push(this.createWord());
  }
  trashGroup(index: number) {
      (<FormArray>this.form.controls['keywords']).removeAt(index);
  }
  trashword(index:  number, index2: number) {
    const formarray =  (<FormArray>this.form.controls['keywords']);
    const group = <FormGroup>formarray.controls[index];
    (<FormArray>group.controls['words']).removeAt(index2);
  }
  private createWord(): FormGroup {
    return this.fb.group({
      word: ['', [ Validators.required]]
    });
  }
  private createKeywordGroup(): FormGroup {
    return  this.fb.group({
      title: [ 'ssss', [ Validators.required]],
      words: this.fb.array([
        this.fb.group({
          word: ['', [ Validators.required]]
        })
      ])
    });
  }

}
