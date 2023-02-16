import { LoginService } from './../../login.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '@shared/models/user.model';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  userRegisterform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(private loginService: LoginService) {}

  onSubmit(): void{
    const value = this.userRegisterform.value;
    const user: User = {
      id: Guid.create().toString(),
      username: value.username?.toString(),
      password: value.password?.toString(),

    }
    this.loginService.register(user).subscribe({
        complete: () => {
          console.log("Gravado com sucesso")
          console.log(user);
          this.userRegisterform.reset();
        },
        error: (error) => console.error(error),
    });

  }
}
