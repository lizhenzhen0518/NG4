import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  styleUrls: [
    './login.scss'
  ],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  model: any;
  error: any;

  constructor(private route: Router) {
    this.model = {};
  }

  onSubmit(loginForm) {

    this.route.navigateByUrl('/manage/home');
   // this.loginService.login(loginForm.value)
     // .subscribe(
     //   user => this.route.navigateByUrl('/manage/home'),
      //  error => this.error = error
    //  );
  };
}
