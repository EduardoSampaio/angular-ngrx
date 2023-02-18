import { User } from '@shared/models/user.model';
import { signIn } from '@core/states/actions/auth.action';
import { AppState } from '@core/states/reducers/index';
import { NotificationService } from '@shared/services/notification.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@modules/login/login.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(
    private notificationService: NotificationService,
    private loginService: LoginService,
    private router: Router,
    private store: Store<AppState>) { }

  userform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    const { username, password } = this.userform.value;
    if (!!username && !!password) {
      this.loginService.login(username, password).subscribe({
        next: (user) => {
          const currentUser : User = {
            id: "1234",
            username: "Eduardo",
            password: "1234"
          }
          if(currentUser){


            this.store.dispatch(signIn({user: currentUser}))
            localStorage.setItem("user", JSON.stringify(currentUser));
            this.router.navigate(['home']);
          }else{
            this.notificationService.showNotification("Login ou senha incorreto", "", "error");
            this.userform.controls.username.setErrors({loginError: true});
            this.userform.controls.password.setErrors({loginError: true});
            this.userform.reset();
          }
        },
        error: (error) => console.error(error),
      });
    }
  }
}
