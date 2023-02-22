import { Category } from './../../../shared/models/category.model';
import { User } from './../../../shared/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly BASE_URL = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient) { }

  add(category: Category): Observable<Category> {
    category.id =  Guid.create().toString();
    return this.httpClient.post<Category>(this.BASE_URL, category);
  }

  update(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(this.BASE_URL, category);
  }

  delete(category: Category): Observable<Category> {
    return this.httpClient.delete<Category>(`${this.BASE_URL}/${category.id}`);
  }

  listAll(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(this.BASE_URL);
  }

  find(category: Category): Observable<Category> {
    return this.httpClient.get<Category>(`${this.BASE_URL}/${category.id}`);
  }
}

