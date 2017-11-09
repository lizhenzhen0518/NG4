import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedOuterModule} from '../../fun/shared';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule} from '@angular/router';
import { ServiceModule} from './fun/services';
import { AppEffectsModule} from './fun/effects';
import { AppStoreModule} from './fun/reducers';
@NgModule({
  imports: [
    CommonModule,
    ServiceModule,
    AppEffectsModule,
    AppStoreModule,
    RouterModule.forChild(ROUTE_CONFIG),
    SharedOuterModule

  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
