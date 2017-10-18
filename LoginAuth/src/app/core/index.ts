import { AppRoutingModule} from './app-routing.module';
import { NgModule , Optional, SkipSelf} from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppStoreModule } from '../reducers';
import { ServiceModule} from '../services';
// effects
import { AppEffectsModule} from '../effects';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ AppRoutingModule, AppStoreModule, ServiceModule.forRoot() , AppEffectsModule, HttpModule, CommonModule],
  exports: [ AppRoutingModule ],

  providers: [{
    provide: 'BASE_CONFIG',
    useValue: {
      uri: 'http://localhost:3000'
    }
  }]
})
export class CoreModule {

}
