import { Injectable } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { HttpClient } from "@angular/common/http";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { HttpOptions } from '@ngrx/data/src/dataservices/interfaces';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';

@Injectable()
export class ProductDataService extends DefaultDataService<Product> {

  private readonly BASE_URL = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Product', httpClient, httpUrlGenerator);
  }

  override getAll(options?: HttpOptions): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(this.BASE_URL);
  }

  override add(entity: Product, options?: HttpOptions): Observable<Product> {
    return this.httpClient.post<Product>(this.BASE_URL, entity);
  }

  override delete(key: string | number, options?: HttpOptions): Observable<string | number> {
    return this.httpClient.delete<string | number>(`${this.BASE_URL}/${key}`);
  }

  override update(update: Update<Product>, options?: HttpOptions): Observable<Product> {
    return this.httpClient.put<Product>(`${this.BASE_URL}/${update.id}`, update);
  }
}
