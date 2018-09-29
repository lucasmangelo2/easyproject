import { Injectable, EventEmitter } from "@angular/core";
import { SystemUser, userDTO } from "./user.model";
import { ReplaySubject } from "rxjs";
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from "@angular/router";
import { NotificationService } from "../../shared/messages/notification.services";



@Injectable()
@Injectable()
export class UserService {

  AUTH_COOKIE: string;
  currentUser: SystemUser = null;
  config:any;

  userLogged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private search: ReplaySubject<string> = new ReplaySubject<string>();

  constructor(private http: HttpClient,
              private router: Router,
              private notification: NotificationService) {

        this.http.get('/assets/data.json')
        .subscribe(data => {
            this.config = data;
        });
    }

  private objectToURLParams(object:any, params: URLSearchParams): URLSearchParams{
    for(let key in object)
      params.append(key, object[key]);

    return params;
  }

  private getHeader(): HttpHeaders{
    let header = new HttpHeaders();
    header.append('Content-type', 'application/json');
    return header;
  }

  login(user:SystemUser){
    let params = new URLSearchParams();
    params = this.objectToURLParams(user,params);

    this.http
        .post( this.config.server + this.config.endpoint.user.auth, user, { headers: this.getHeader() })
        .subscribe(
          data => {
            if(!!data){
              this.currentUser = data;
                localStorage.setItem(this.AUTH_COOKIE, 'Usuario Loagado');
                this.router.navigate(['']);
            }

          },
          error => {
            this.notifyResponseError(error);
          }
        );
  }

  register(user:userDTO){
    let params = new URLSearchParams();
    params = this.objectToURLParams(user,params);

    this.http
        .post(this.config.server + this.config.endpoint.user.new, user,{ headers: this.getHeader()} )
        .subscribe(
          data => {
            this.login(user);
          },
          error => {
            this.notifyResponseError(error);
          }
        );
  }

  private notifyResponseError(error:any){
    let message: string = "";
    if(error.status == 0)
      message = "Erro ao conectar com o servidor";
    else{
      var object = error.json();
      if(!!error.json().Message)
        message = error.json().Message;
    }
    
    this.notification.notify(message);
  }
}