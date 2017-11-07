import { Project} from '../domain';
import * as projectAction from '../actions/project.action';
export interface State {
  projects: Project[];
}
export const initialState: State = {
  projects: []
};
export function reducer(state: State = initialState, action: projectAction.Actions) {
  switch (action.type) {
    case projectAction.ActionTypes.LOAD:
    case projectAction.ActionTypes.LOAD_SUCCESS: {
      const projects = <Project[]> action.payload;
      return {
        projects: projects
      };
    }
    default: {
      return state;
    }
  }
}
export const getProjects = (state: State) => state.projects;
