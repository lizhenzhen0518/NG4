import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { ProjectSharedModule} from './shared';
import { ProjectListComponent } from './project-list';
import { ProjectHomeComponent } from './home';
import { ProjectComponent} from './project.component';
import { CoreProjectModule } from './core';
import { ProjectFooterComponent} from './footer';
import { ProjectHeaderComponent} from './header';
@NgModule({
  imports: [
    CoreProjectModule,
    SharedModule

  ],
  exports: [],
  entryComponents: [ ],  // ?????
  declarations: [
    ProjectListComponent,
    ProjectHomeComponent,
    ProjectComponent,
    ProjectFooterComponent,
    ProjectHeaderComponent
  ]
})
export class ProjectAppModule {
}
