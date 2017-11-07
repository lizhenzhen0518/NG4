import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { SharedOuterModule} from '../../../../fun/shared';
@NgModule({
  imports: [
    SharedOuterModule,
    CommonModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
