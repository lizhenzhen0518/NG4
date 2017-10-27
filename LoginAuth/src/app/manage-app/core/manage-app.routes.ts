import { Routes , RouterModule } from '@angular/router';

import { ManageAppComponent } from '../manage-app.component';


import { ManageHomeComponent } from '../manage-home';
import { ManageArticleListComponent } from '../manage-article-list';
import { MdEditorComponent } from '../md-editor';
import { NgModule} from '@angular/core';
export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: ManageAppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/manage/home' },
      {
        path: 'home',
        component: ManageHomeComponent
      },
      {
        path: 'articles',
        component: ManageArticleListComponent

      },
      {
        path: 'articles/:id',
        component: MdEditorComponent

      }
    ]
  }

];
@NgModule({
  imports: [ RouterModule.forChild( ROUTER_CONFIG ) ],
  exports: [ RouterModule ]
})
export  class  ManageAppRoutes {}
