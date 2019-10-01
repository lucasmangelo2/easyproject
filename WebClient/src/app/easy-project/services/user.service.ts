import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../user/user.model';
import { ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/messages/notification.services';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  AUTH_COOKIE: string;
  currentUser: User = null;

  userLogged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private notification: NotificationService) {}

  private objectToURLParams(object: any, params: URLSearchParams): URLSearchParams {
    for (const key in object) {
      params.append(key, object[key]);
    }

    return params;
  }

  private getHeader(): HttpHeaders {
    const header = new HttpHeaders();
    header.append('Content-type', 'application/json');
    return header;
  }

  login(user: User) {
    let params = new URLSearchParams();
    params = this.objectToURLParams(user, params);

    this.http
        .post(`${environment.api_url}/users/auth`, user, { headers: this.getHeader() })
        .subscribe(
          data => {
            if (!!data) {
              this.currentUser = data;
                localStorage.setItem(this.AUTH_COOKIE, 'Usuario Logado');
                this.router.navigate(['']);
            }
          },
          error => {
            this.notifyResponseError(error);
          }
        );
  }

  register(user: User) {
    let params = new URLSearchParams();
    params = this.objectToURLParams(user, params);

    this.http
        .post(`${environment.api_url}/users`, user, { headers: this.getHeader()} )
        .subscribe(
          data => {
            this.login(user);
          },
          error => {
            this.notifyResponseError(error);
          }
        );
  }

  private notifyResponseError(error: any) {
    let message = '';
    if (error.status === 0) {
      message = 'Erro ao conectar com o servidor';
    } else {
      const object = error.json();
      if (!!error.json().Message) {
        message = error.json().Message;
      }
    }

    this.notification.notify(message);
  }
}
