import { loadCategories } from './action/crud-category.actions';
import { finalize, first, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Category } from '@shared/models/category.model';
import { Store } from '@ngrx/store';
import { CategoryState } from './reducers';

@Injectable()
export class CategoryResolver implements Resolve<any> {

  loading = false;

  constructor(private store: Store<CategoryState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if(!this.loading) {
          this.loading = true;
          this.store.dispatch(loadCategories());
        }
      }),
      first(),
      finalize(() => this.loading = false)
    );
  }
}
