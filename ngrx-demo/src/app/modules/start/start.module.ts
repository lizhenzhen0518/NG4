import { NgModule, OnInit} from '@angular/core';
import { StartComponent} from './start.component';
import { ROUTE_CONFIG} from './m-router';
import { RouterModule} from '@angular/router';

import { SharedModule} from './fun/shared';

import { SharedOuterModule} from '../../fun/shared';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


import { ServiceModule} from './fun/services';
import { AppEffectsModule} from './fun/effects';
import { AppStoreModule} from './fun/reducers';
@NgModule({
  imports: [

    SharedOuterModule,
    SharedModule,
    ServiceModule,
    AppEffectsModule,
    AppStoreModule,

    RouterModule.forChild(ROUTE_CONFIG)
  ],
  exports: [],
  declarations: [StartComponent, HeaderComponent, FooterComponent,

  ]
})
export class StartModule {


}
