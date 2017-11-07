import { Inject, Injectable} from '@angular/core';
import { Quote } from '../domain';
import { Http} from '@angular/http';

import { Observable } from 'rxjs/observable';
@Injectable()
export class QuoteService {

  constructor(@Inject('BASE_CONFIG') private config, private http: Http) { }

  getQuote(): Observable<Quote> {
    const url =  `${this.config}/quotes/${Math.floor(Math.random()) * 10}`;
    return this.http.get(url).map(res => res.json() as Quote);
  }

}
