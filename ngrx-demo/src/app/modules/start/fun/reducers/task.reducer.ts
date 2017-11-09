import { Quote} from '../domain/quote';
import * as actions from '../actions/task.action';
// 创建一个 接口
export interface State {
  task: Quote;
}
// 初始化State

export const initialState: State = {
  task: {
    cn: '满足感在于不断的努力，而不是现有成就。全心努力定会胜利满满。',
    en: 'Satisfaction lies in the effort, not in the attainment. Full effort is full victory. ',
    pic: 'assets/img/quote_fallback.jpg',
  }
};
export function reducer( state: State = initialState, action: actions.Actions): State {
  switch ( action.type ) {
    case actions.ActionsTypes.TASK_SUCCESS:
      return {...state, task: action.payload};
    case actions.ActionsTypes.TASK_FAIL:
    default:
      return state;
  }
}

export const getTask = (state: State) => {

  return state.task;
}



