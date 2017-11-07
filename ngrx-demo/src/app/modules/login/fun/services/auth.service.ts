import { Injectable, Inject} from '@angular/core';
import { Auth } from '../../../../fun/domain';
import { Observable} from 'rxjs/observable';
import { Http, Headers} from '@angular/http';
import { User} from '../../../../fun/domain';
@Injectable()
export class AuthService {
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
    '.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9' +
    '.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
  constructor(@Inject('BASE_CONFIG') private config, private http: Http) {}

  /**
   *  登录
   * @param {string} email
   * @param {string} password
   * @returns {Observable<Auth>}
   */
  login(email: string, password: string): Observable<Auth> {
    const uri = `${this.config.uri}/users`;
    return this.http.get(uri, {
      params: {
        'email': email,
        'password': password
      }
    }).map(res => {
      if (res.json().length === 0) {
         throw new Error('Login Failed');
      }
      return {
        token: this.token,
        user: res.json()[0]
      };
    });
  }

  /**
   *  注册
   * @param {User} user
   * @returns {Observable<Auth>}
   */
  register(user: User): Observable<Auth> {
    const uri =  `${this.config.uri}/users`;
    return this.http.get(uri, {
      params: { email: user.email}
    }).switchMap(res => {
        if (res.json().length > 0) {
          throw new Error('username existed');
        }
      return this.http.post(uri, JSON.stringify(user), {headers: this.headers})
        .map(r => ({token: this.token, user: r.json()}));
    });
  }
}
