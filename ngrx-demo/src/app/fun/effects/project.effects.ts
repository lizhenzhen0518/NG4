import * as projectAction from '../actions/project.action';
import { Actions, Effect, toPayload} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ProjectService} from '../services/project.service';
import { Injectable} from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';

@Injectable()
export class ProjectEffects {
  constructor(private action$: Actions, private projectService: ProjectService) {}
  @Effect()
  loadProjects$: Observable<Action> = this.action$
     .ofType(projectAction.ActionTypes.LOAD)
    .switchMap(val => this.projectService.getProjects()
       .map( project => new projectAction.LoadSuccessPojectsAction(project))
       .catch(err => of( new projectAction.LoadFailProjectsAction(JSON.stringify(err)))));
}
