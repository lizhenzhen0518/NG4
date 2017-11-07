import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule} from './fun/core';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { SharedOuterModule} from '../../../../fun/shared';
@NgModule({
  imports: [
    SharedOuterModule,
    CommonModule,
    CoreModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
