import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckuserComponent } from './checkuser.component';
import { SharedOuterModule} from '../../../../../../fun/shared';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    SharedOuterModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [CheckuserComponent]
})
export class CheckuserModule { }
