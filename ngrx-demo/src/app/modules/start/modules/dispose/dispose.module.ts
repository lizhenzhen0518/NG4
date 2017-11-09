import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisposeComponent } from './dispose.component';

import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SharedOuterModule} from '../../../../fun/shared';
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
  declarations: [
    DisposeComponent,
    HeaderComponent]
})
export class DisposeModule { }
