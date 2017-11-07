import {Component, OnInit} from '@angular/core';
import * as fromRoot from '../../fun/reducers';
import { Store} from '@ngrx/store';
import { Observable} from 'rxjs/Observable';
import { Quote } from './fun/domain/quote';

@Component({
  selector: 'app-start',
  styleUrls: ['./start.component.scss'],
  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit {
  has = true;
  quote$: Observable<Quote>;
  constructor(private store$: Store<fromRoot.State> ) {
    this.quote$ = this.store$.select(fromRoot.getQuote);
  }
 ngOnInit() {
 }

}
