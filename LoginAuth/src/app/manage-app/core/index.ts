import { ROUTER_CONFIG, ManageAppRoutes} from './manage-app.routes';
import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [ ManageAppRoutes ],
  exports: [ ManageAppRoutes ]
})
export class CoreManageModule { }
