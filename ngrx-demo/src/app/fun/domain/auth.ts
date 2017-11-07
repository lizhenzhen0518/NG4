import { User  } from './user';
import { Err } from './err';
export interface Auth {
  user?: User;
  userId?: string;
  token?: string;
  err?: Error;
}
