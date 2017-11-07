import { Routes} from '@angular/router';
import { StartComponent} from './start.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: StartComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/start/home'
      },
      {
        path: 'home',
        pathMatch: 'full',
        loadChildren: 'app/modules/start/modules/home/home.module#HomeModule'
      },
      {
        path: 'search',
        pathMatch: 'full',
        loadChildren: 'app/modules/start/modules/search/search.module#SearchModule'
      },
      {
        path: 'dispose',
        loadChildren: 'app/modules/start/modules/dispose/dispose.module#DisposeModule'
      }
    ]
  }

];
