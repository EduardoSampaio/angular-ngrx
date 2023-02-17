import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoggedinGuard implements CanActivate  {
  constructor(private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const user = localStorage.getItem("user");
    console.log(user);
    if(user !== null && user !== undefined){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }
  }
}
