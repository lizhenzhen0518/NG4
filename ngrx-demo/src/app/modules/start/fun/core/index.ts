import { NgModule } from '@angular/core';
import { AppEffectsModule } from '../effects';
import { ServiceModule } from '../services';
@NgModule( {
  imports: [
    AppEffectsModule,
    ServiceModule
  ]
})
export class CoreModule {}
