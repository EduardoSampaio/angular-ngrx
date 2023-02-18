import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '@shared/models/user.model';
import { map, Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginService {

  private readonly BASE_URL = 'http://localhost:3000/users'

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    const params = new HttpParams().set('username', username).set('password', password);
    return this.httpClient.get<User>(this.BASE_URL, {params}).pipe(map(user => user));
  }

  register(user: User):Observable<User> {
    return this.httpClient.post<User>(this.BASE_URL, user);
  }

}
