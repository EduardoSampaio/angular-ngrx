
import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Protect router for specific profile [admin , user,...]
 */
@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanMatch {
  //constructor() {}

  canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
