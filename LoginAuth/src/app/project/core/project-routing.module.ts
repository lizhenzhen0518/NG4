import { RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';
import { ProjectListComponent } from '../project-list';
import { ProjectHomeComponent } from '../home';
import { ProjectComponent} from '../project.component';
const routep: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/projects/home'
      },
      {
        path: 'home',
        component: ProjectHomeComponent
      },
      {
        path: 'list',
        component: ProjectListComponent
      }
    ]
  }
];
@NgModule({
  imports: [ RouterModule.forChild( routep ) ],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule {}
