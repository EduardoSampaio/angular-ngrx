import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@modules/login/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private loginService: LoginService, private router: Router) { }

  userform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    const { username, password } = this.userform.value;
    if (!!username && !!password) {
      this.loginService.login(username, password).subscribe({
        next: (user) => {
          console.log('Login Sucesso', user);
          this.userform.reset();
          localStorage.setItem("user", JSON.stringify(user));
          this.router.navigate(['home']);
        },
        error: (error) => console.error(error),
      });
    }
  }
}
