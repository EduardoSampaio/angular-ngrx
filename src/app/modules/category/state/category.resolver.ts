import { CategoryDataService } from '@modules/category/services/category-data.service';
import { CategoryService } from '@modules/category/services/category.service';
import { Observable, map, tap, filter, first } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CategoryResolver implements Resolve<any> {

  constructor(private categoryEntityDataService: CategoryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.categoryEntityDataService.loaded$
    .pipe(
      tap(loaded => {
        if(!loaded) {
          this.categoryEntityDataService.getAll();
        }
      }),
      filter(loaded => !!loaded),
      first()
    )
  }
}
