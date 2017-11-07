import { Routes} from '@angular/router';
import { DisposeComponent } from './dispose.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: DisposeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'uncheckuser',
      },
      {
        path: 'uncheckuser',
        pathMatch: 'full',
        loadChildren: 'app/modules/start/modules/dispose/modules/uncheckuser/uncheckuser.module#UncheckuserModule'
      },
      {
        path: 'uncheckmsg',
        pathMatch: 'full',
        loadChildren: 'app/modules/start/modules/dispose/modules/uncheckmsg/uncheckmsg.module#UncheckmsgModule'
      },
      {
        path: 'checkmsg',
        pathMatch: 'full',
        loadChildren: 'app/modules/start/modules/dispose/modules/checkmsg/checkmsg.module#CheckmsgModule'
      },
      {
        path: 'checkuser',
        pathMatch: 'full',
        loadChildren: 'app/modules/start/modules/dispose/modules/checkuser/checkuser.module#CheckuserModule'
      },
      {
        path: 'alarm',
        pathMatch: 'full',
        loadChildren: 'app/modules/start/modules/dispose/modules/alarm/alarm.module#AlarmModule'
      }
    ]
  }
];
