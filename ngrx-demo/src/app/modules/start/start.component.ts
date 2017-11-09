import {Component, OnInit} from '@angular/core';
import * as fromFeature from './fun/reducers';
import { Store} from '@ngrx/store';
import { Observable} from 'rxjs/Observable';
import { Quote } from './fun/domain/quote';
import * as fromRoot from '../../fun/reducers';
import * as fromAuth from '../../modules/login/fun/reducers';
@Component({
  selector: 'app-start',
  styleUrls: ['./start.component.scss'],
  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit {
  has = true;
  quote$: Observable<Quote>;
  task$: Observable<Quote>;
  project$: Observable<Array<any>>;
  auth$:Observable<any>;　
  constructor(private store$: Store<fromFeature.FeatureState>,
              private rootStore$: Store<fromRoot.State>,
              private authStore$: Store<fromAuth.FeatureState>) {

    this.quote$ = this.store$.select(fromFeature.getQuote);
    this.quote$.subscribe(val => {
     // console.log(val);
    })
    this.task$ = this.store$.select(fromFeature.getTask);
    this.task$.subscribe(val => {
      //console.log(val);
    })
    this.project$ = this.rootStore$.select(fromRoot.getProjects);
    this.project$.subscribe(val => {
      console.log(val);
    })
    this.auth$ = this.authStore$.select(fromAuth.getAuth);
    this.auth$.subscribe(val => {
      console.log('auth ' , val);
    })
  }
 ngOnInit() {
 }

}
