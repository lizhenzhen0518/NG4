import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedOuterModule} from '../../fun/shared';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule} from '@angular/router';
import { CoreModule } from './fun/core';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE_CONFIG),
    SharedOuterModule,
    CoreModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
