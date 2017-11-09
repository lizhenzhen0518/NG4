import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmComponent } from './alarm.component';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { SharedOuterModule} from '../../../../../../fun/shared';
import { ServiceModule} from './fun/services';
import { AppEffectsModule} from './fun/effects';
import { AppStoreModule} from './fun/reducers';
@NgModule({
  imports: [
    ServiceModule,
    AppEffectsModule,
    AppStoreModule,
    CommonModule,
    SharedOuterModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [AlarmComponent]
})
export class AlarmModule { }
