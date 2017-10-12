import { RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
const route: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(route) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
