import { HttpClient } from '@angular/common/http';
import { Category } from '@shared/models/category.model';
import { Injectable } from "@angular/core";
import { DefaultDataService, DefaultHttpUrlGenerator, HttpResourceUrls, HttpUrlGenerator, Pluralizer } from "@ngrx/data";
import { map, Observable } from 'rxjs';
import { HttpOptions } from '@ngrx/data/src/dataservices/interfaces';
import { Update } from '@ngrx/entity';


@Injectable()
export class CategoryDataService extends DefaultDataService<Category> {

  private readonly BASE_URL = 'http://localhost:3000/categories';

  constructor(private httpClient: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super("Category", httpClient, httpUrlGenerator)
  }

  override getAll(options?: HttpOptions): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(this.BASE_URL);
  }

  override add(entity: Category, options?: HttpOptions): Observable<Category> {
    return this.httpClient.post<Category>(this.BASE_URL, entity);
  }

  override delete(key: string | number, options?: HttpOptions): Observable<string | number> {
    return this.httpClient.delete<string | number>(`${this.BASE_URL}/${key}`);
  }

  override update(update: Update<Category>, options?: HttpOptions): Observable<Category> {
    return this.httpClient.put<Category>(`${this.BASE_URL}/${update.id}`, update);
  }
}
