import { Project} from '../domain';
import { Action} from '@ngrx/store';
import { type} from '../util/type.util';
import {Err} from '../domain';
 export const ActionTypes = {
   LOAD: type('[ Project ] load'),
   LOAD_SUCCESS: type( '[ Project] load_success'),
   LOAD_FAIL: type( '[ Project ] load_fail')
 };
 export class LoadProjectsAction implements Action {
   readonly type = ActionTypes.LOAD;
   constructor(public payload: any ) {}
 }
export class LoadSuccessPojectsAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
   constructor(public payload: Project[]) { }
}
export class LoadFailProjectsAction implements Action {
  readonly type = ActionTypes.LOAD_FAIL;
   constructor(public payload: string) {}
}

export type Actions = LoadFailProjectsAction
               | LoadProjectsAction
               | LoadSuccessPojectsAction;
