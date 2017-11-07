import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppStoreModule} from '../reducers';
import { AppEffectsModule} from '../effects';

import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import { ServiceModule } from '../services';
@NgModule({
  imports: [ HttpModule, AppStoreModule, ServiceModule.forRoot(), AppEffectsModule],
  exports: [  ],

  providers: [{
    provide: 'BASE_CONFIG',
    useValue: {
      uri: 'http://localhost:3000'
    }
  }]
})
export class CoreModule {

}
