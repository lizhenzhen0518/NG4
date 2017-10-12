import { RouterModule , Routes} from '@angular/router';
import { NgModule} from '@angular/core';
import { ForgetComponent} from './forget/index';
import { LoginComponent} from './login/index';
import { RegisterComponent} from './register/index';
const route: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'forget',
    component: ForgetComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

