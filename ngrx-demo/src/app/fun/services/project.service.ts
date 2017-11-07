import { Inject, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Project} from '../domain';
import { Observable} from 'rxjs/Observable';
@Injectable()
export class ProjectService {

   constructor(private http: Http, @Inject('BASE_CONFIG') private config) {}
   getProjects(): Observable<Project[]> {
     const url = `${this.config.uri}/projects`;
     return this.http.get(url).map(res =>  res.json() );
   }
}
