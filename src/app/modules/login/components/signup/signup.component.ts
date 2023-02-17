import { LoginService } from './../../login.service';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '@shared/models/user.model';
import { Guid } from 'guid-typescript';
import { passwordMatchValidator } from '@shared/services/custom-validation.service';
import { NotificationService } from '@shared/services/notification.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  userRegisterform!: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.initform();
  }


  initform(): void {
    this.userRegisterform = this.fb.group(
      {
        username: ['', [Validators.minLength(4), Validators.required]],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: [passwordMatchValidator("password", "confirmPassword")] }
    );
  }

  onSubmit(): void {
    const value = this.userRegisterform.value;
    const user: User = {
      id: Guid.create().toString(),
      username: value.username?.toString(),
      password: value.password?.toString(),
    };
    this.loginService.register(user).subscribe({
      complete: () => {
        this.notificationService.showNotification("New user registred successful!","","success");
        this.resetForm(this.userRegisterform);
      },
      error: (error) => console.error(error),
    });
  }

  get username() {
    return this.userRegisterform.get('username');
  }

  get password() {
    return this.userRegisterform.get('password');
  }

  get confirmPassword() {
    return this.userRegisterform.get('confirmPassword');
  }

  resetForm(formGroup: FormGroup) {
    let control: AbstractControl;
    formGroup.reset();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }
}

