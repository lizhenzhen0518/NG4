import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../fun/reducers';
import * as authAction from '../../fun/actions/auth.action';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store$: Store<fromRoot.State>, private router: Router) {
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
