import { RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuardService} from '../services';
const route: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'projects',
    loadChildren: 'app/project#ProjectModule',
    pathMatch: 'full',
     canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(route) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
