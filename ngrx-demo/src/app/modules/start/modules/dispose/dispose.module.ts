import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisposeComponent } from './dispose.component';
import { CoreModule} from './fun/core';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SharedOuterModule} from '../../../../fun/shared';
@NgModule({
  imports: [
    CommonModule,
    SharedOuterModule,
    CoreModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [
    DisposeComponent,
    HeaderComponent]
})
export class DisposeModule { }
