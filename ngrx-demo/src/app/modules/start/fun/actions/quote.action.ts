import { Action} from '@ngrx/store';
import { Quote } from '../domain';
import { type } from '../../../../fun/util/type.util';
export const ActionsTypes = {
  QUOTE: type('[Quote] Quote'),
  QUOTE_SUCCESS: type('[Quote] Quote Success'),
  QUOTE_FAIL: type('[Quote] Quote Fail')
};
export class QuoteAction implements Action {
  type = ActionsTypes.QUOTE;
  constructor(public payload: any) {}
}
export class QuoteSuccessAction implements Action {
  type = ActionsTypes.QUOTE_SUCCESS;
  constructor( public  payload: Quote) { }
}
export class QuoteFailAction implements Action {
  type = ActionsTypes.QUOTE_FAIL;
  constructor( public  payload: string) { }
}
export type Actions = QuoteAction | QuoteFailAction | QuoteSuccessAction;
