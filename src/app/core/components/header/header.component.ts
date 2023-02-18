import { AppState } from './../../states/reducers/index';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedIn } from '@core/states/selectors/auth.selectors';
import { signOut } from '@core/states/actions/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLogged$!: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store<AppState>) {
    this.isLogged$ = this.store.pipe(select(isLoggedIn))
  }

  logout(): void {
    localStorage.removeItem("user");
    this.store.dispatch(signOut());
    this.router.navigate(["login"]);
  }
}
