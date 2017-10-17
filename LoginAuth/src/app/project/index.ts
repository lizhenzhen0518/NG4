import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectListComponent} from './project-list';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  exports: [ProjectListComponent],
  entryComponents: [ ],  // ?????
  declarations: [
    ProjectListComponent
  ]
})
export class ProjectModule {
}
