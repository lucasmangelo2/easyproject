import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { User } from '../user.model';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  numberPattern = /^[0-9]*$/;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  registerForm: FormGroup;
  isShowing = false;
  isConfirmShowing = false;

  constructor(private formBuilder: FormBuilder,
              private service: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      // email: this.formBuilder.control('',[Validators.required, Validators.maxLength(100), Validators.pattern(this.emailPattern)]),
      username: this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
      name:  this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
      lastname: this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
      password: this.formBuilder.control('', [Validators.required, Validators.maxLength(50), Validators.minLength(6)]),
      confirm_password: this.formBuilder.control('', [Validators.required, Validators.maxLength(50), this.passwordConfirming]),
    });
  }

  // get email(): any { return this.registerForm.get('email'); }
  get name(): any { return this.registerForm.get('name'); }
  get username(): any { return this.registerForm.get('username'); }
  get password(): any { return this.registerForm.get('password'); }
  get confirm_password(): any { return this.registerForm.get('confirm_password'); }
  get lastname(): any { return this.registerForm.get('lastname'); }


  passwordConfirming(c: AbstractControl): any {
    if (!c.parent || !c) { return; }
    const pwd = c.parent.get('password');
    const cpwd = c.parent.get('confirm_password');

    if (!pwd || !cpwd) { return ; }
    if (pwd.value !== cpwd.value) {
        return { invalid: true };
    }
  }

  showClick() {
    this.isShowing = !this.isShowing;
  }

  showConfirmClick() {
    this.isConfirmShowing = !this.isConfirmShowing;
  }

  getUser(): User {
    return {
      name: this.name.value,
      lastName: this.lastname.value,
      username: this.username.value,
      password: this.password.value
    };
  }

  onRegisterClick() {
    const user = this.getUser();
    this.service.register(user);
  }

}
