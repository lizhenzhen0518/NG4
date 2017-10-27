import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as authActions from '../../actions/auth.action';
import { RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private store$: Store<fromRoot.State>) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['' , [Validators.maxLength(20),
                    Validators.email,
                    Validators.required]],
      password: ['123', Validators.required]
    });
  }
  onSubmit({value, valid}, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    if ( !valid ) {
      return;
    }
    this.store$.dispatch(new authActions.LoginAction({
      email: value.email,
      password: value.password
    }));
  }


}
