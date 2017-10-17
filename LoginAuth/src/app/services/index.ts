import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

export {
  AuthGuardService,
  AuthService
};

@NgModule()
export class ServiceModule {
  static forRoot() {
    return {
      ngModule: ServiceModule,
      providers: [
        AuthService,
        AuthGuardService
      ]
    };
  }
}
