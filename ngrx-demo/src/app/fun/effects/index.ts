import { NgModule} from '@angular/core';
import { EffectsModule} from '@ngrx/effects';

import { ProjectEffects} from './project.effects';


@NgModule({
  imports: [
    EffectsModule.forRoot([
      ProjectEffects
    ]),
  ],
  providers: [
  ]
})
export class  AppEffectsModule { }
