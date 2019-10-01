import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { User } from '../user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('registerAppeared', [
      state('hidden', style({
        opacity: 0,
        width: 0
      })),
      state('visible', style({
        opacity: 1,
        width: '70%'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ]),
    trigger('loginOnLeftSide', [
      state('onside', style({
        width: '30%'
      })),
      state('none', style({
        marginRight: '0'
      })),
      transition('none => onside', animate('500ms 0s ease-in')),
      transition('onside => none', animate('500ms 0s ease-out'))
    ])
  ]
})
export class LoginComponent implements OnInit {

  [x: string]: any;
  authError: boolean;
  showRegister = false;
  registerState = 'hidden';
  loginPosition = 'none';
  loginForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
      password: this.formBuilder.control('', [Validators.required, Validators.maxLength(50)]),
    });

    this.userService.currentUser = null;
    this.userService.AUTH_COOKIE = '';
  }

  get username(): any { return this.loginForm.get('username'); }
  get password(): any { return this.loginForm.get('password'); }

  getUser() {
    const user: User = {
      password: this.password.value,
      username: this.username.value
    };

    return user;
  }
  onSubmit() {
    const user = this.getUser();
    this.authenticate(user);
  }

  authenticate(user: User) {
    this.authError = false;
    this.userService.login(user);
  }

  onRegisterClick() {
    this.showRegister = !this.showRegister;
    this.registerState = this.registerState === 'visible' ? 'hidden' : 'visible';
    this.loginPosition = this.loginPosition === 'onside' ? 'none' : 'onside';
  }

}
