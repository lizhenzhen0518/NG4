import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncheckuserComponent } from './uncheckuser.component';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { SharedOuterModule} from '../../../../../../fun/shared';
import { ServiceModule} from './fun/services';
import { AppEffectsModule} from './fun/effects';
import { AppStoreModule} from './fun/reducers';
@NgModule({
  imports: [
    CommonModule,
    ServiceModule,
    AppEffectsModule,
    AppStoreModule,
    SharedOuterModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [UncheckuserComponent]
})
export class UncheckuserModule { }
