import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncheckmsgComponent } from './uncheckmsg.component';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { SharedOuterModule} from '../../../../../../fun/shared';
import { ServiceModule} from './fun/services';
import { AppEffectsModule} from './fun/effects';
import { AppStoreModule} from './fun/reducers';
@NgModule({
  imports: [
    CommonModule,
    SharedOuterModule,
    ServiceModule,
    AppEffectsModule,
    AppStoreModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [UncheckmsgComponent]
})
export class UncheckmsgModule { }
