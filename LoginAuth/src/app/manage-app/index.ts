import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ManageAppComponent } from './manage-app.component';

import { LoginComponent } from './login';

import { ManageArticleListComponent } from './manage-article-list';
import { ManageHomeComponent } from './manage-home';

import { MdEditorComponent } from './md-editor';

import { CoreManageModule } from './core';


@NgModule({
  imports: [
    SharedModule,
    CoreManageModule


  ],
  providers: [
  ],
  declarations: [
    ManageAppComponent,

    LoginComponent,

    ManageArticleListComponent,
    ManageHomeComponent,

    MdEditorComponent

  ]
})
export class ManageAppModule { }
