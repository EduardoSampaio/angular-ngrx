import { SharedModule } from './../../shared/shared.module';
import { SiginComponent } from './components/sigin/sigin.component';
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
      { path: '', component: SiginComponent, pathMatch: 'full' },
      { path: 'signin', component: SiginComponent},
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [LoginComponent, SignupComponent, SiginComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
