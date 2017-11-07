import { User } from './user';

export interface Project {
  id?: string;
  positionCode: string;
  positionName: string;
  user?: User[];
  rights?: Map<string, boolean>;
}
