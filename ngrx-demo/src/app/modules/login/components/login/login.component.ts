import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../fun/reducers';
import * as authAction from '../../fun/actions/auth.action';
import {Router} from '@angular/router';
import * as fromStart from '../.././../../modules/start/fun/reducers';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote$: Observable<any>;
  constructor(private fb: FormBuilder,
              private store$: Store<fromRoot.State>,
              private router: Router,
              private startStore$: Store<fromStart.FeatureState>) {
    this.quote$ = this.startStore$.select(fromStart.getQuote);
    this.quote$.subscribe(val => {
      console.log(val);
    })
  }

  ngOnInit() {
    this.form = this.fb.group({
       email: [ '', Validators.compose([ Validators.maxLength(20),
        Validators.required,
        Validators.email])
      ]
      ,
       password: ['', [ Validators.minLength(6), Validators.required]]

  });

  }
  onSubmit({value, valid}, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    if ( !valid ) {
      return;
    }
    this.router.navigateByUrl('/start');
    // this.store$.dispatch(new authAction.LoginAction({
    //   email: value.email,
    //   password: value.password
    // }));
  }

}
