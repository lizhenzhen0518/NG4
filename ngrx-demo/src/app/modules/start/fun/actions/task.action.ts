import { Action} from '@ngrx/store';
import { Quote } from '../domain';
import { type } from '../../../../fun/util/type.util';
export const ActionsTypes = {
  TASK: type('[Task] Task'),
  TASK_SUCCESS: type('[Task] Task Success'),
  TASK_FAIL: type('[Task] Task Fail')
};
export class TaskAction implements Action {
  type = ActionsTypes.TASK;
  constructor(public payload: any) {}
}
export class TaskSuccessAction implements Action {
  type = ActionsTypes.TASK_SUCCESS;
  debugger
  constructor( public  payload: Quote) { }
}
export class TaskFailAction implements Action {
  type = ActionsTypes.TASK_FAIL;
  constructor( public  payload: string) { }
}
export type Actions = TaskAction | TaskFailAction | TaskSuccessAction;
