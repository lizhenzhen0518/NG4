import { NgModule } from '@angular/core';
import { Test} from './test';
import { AuthGuardService} from './auth-guard.service';
import { ProjectService} from './project.service';
export {


};

@NgModule()
export class ServiceModule {
  static forRoot() {
    return {
      ngModule: ServiceModule,
      providers: [
        Test,
        AuthGuardService,
        ProjectService

      ]
    };
  }
}
