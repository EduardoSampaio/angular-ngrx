import { LoginService } from './login.service';
import { SharedModule } from './../../shared/shared.module';
import { SigninComponent as SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', component: SigninComponent},
      { path: 'signin', component: SigninComponent},
      { path: 'signup', component: SignupComponent },
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [LoginComponent, SignupComponent, SigninComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [LoginService]
})
export class LoginModule {}
