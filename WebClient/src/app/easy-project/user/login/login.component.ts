import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { SystemUser } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('registerAppeared',[
      state('hidden', style({
        opacity:0,
        width:0
      })),
      state('visible', style({
        opacity:1,
        width:'1000px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ]),
    trigger('loginOnLeftSide',[
      state('onside', style({
        marginRight:'1000px'
      })),
      state('none', style({
        marginRight:'0'
      })),
      transition('none => onside', animate('500ms 0s ease-in')),
      transition('onside => none', animate('500ms 0s ease-out'))
    ])
  ]
})
export class LoginComponent implements OnInit {

  [x: string]: any;
  authError: boolean;
  showRegister:boolean =false;
  registerState:string = "hidden";
  loginPosition:string = "none";
  loginForm: FormGroup;
  
  constructor(private UserService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
      password: this.formBuilder.control('',[Validators.required, Validators.maxLength(50)]),
    });

    this.UserService.currentUser = null;
    this.UserService.AUTH_COOKIE = "";
  }

  get username(): any { return this.loginForm.get('username'); }
  get password(): any { return this.loginForm.get('password'); }

  getUser(){
    let user: SystemUser = 
     {
      SystemUserName: this.username.value,
      Password: this.password.value,
      Nickname: this.username.value
    };

    return user;
  }
  onSubmit(){
    let user = this.getUser();
    this.authenticate(user);
  }

  authenticate(user:SystemUser){
    this.authError = false;
    this.UserService.login(user);
  }

  onRegisterClick(){
    this.showRegister = !this.showRegister;
    this.registerState = this.registerState == "visible" ? "hidden" : "visible";
    this.loginPosition = this.loginPosition == "onside" ? "none": "onside";
  }

}
