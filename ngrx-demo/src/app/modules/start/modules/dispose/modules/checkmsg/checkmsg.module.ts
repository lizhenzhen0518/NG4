import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckmsgComponent } from './checkmsg.component';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { SharedOuterModule} from '../../../../../../fun/shared';
@NgModule({
  imports: [
    CommonModule,
    SharedOuterModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [CheckmsgComponent]
})
export class CheckmsgModule { }
