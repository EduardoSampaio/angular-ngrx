import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryActions } from '../action/category-action-type';
import { catchError, concatMap, EMPTY, map, mergeMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { NotificationService } from '@shared/services/notification.service';
import { loadCategories } from '../action/crud-category.actions';
import { CategoryState } from '../reducers';
import { CategoryService } from '@modules/category/services/category.service';
import { CategoryDataService } from '@modules/category/services/category-data.service';



@Injectable()
export class CategoryEffects {

  constructor(
    private actions$: Actions,
    private categoryDataService: CategoryService,
    private notification: NotificationService,
    private store: Store<CategoryState>) { }

  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActions.loadCategories),
    mergeMap(() => this.categoryDataService.getAll()
      .pipe(map(categories => CategoryActions.loadCategoriessSuccess({ categories })),
        catchError(() => EMPTY)
      ))
  ));

  addNewCategory$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActions.addNewCategory),
    tap((action) => {
      this.categoryDataService.add(action.data).subscribe({
        next: () => {
          this.store.dispatch(loadCategories());
        },
        error: () => {
          this.notification.showNotification("Category Add new  Error", "", "error");
        },
        complete: () => {
          this.notification.showNotification("Category save succefully", "", "success");
        }
      })
    })
  ), { dispatch: false });

   updateCategory$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActions.updateCategory),
    tap((action) => {
      this.categoryDataService.update(action.data).subscribe({
        next: () => {
          this.store.dispatch(loadCategories());

        },
        error: () => {
          this.notification.showNotification("Category update Error", "", "error");
        },
        complete: () => {
          this.notification.showNotification("Category save succefully", "", "success");
        }
      })
    })
  ), { dispatch: false });

  removeCategory$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActions.removeCategory),
    tap((action) => {
      this.categoryDataService.delete(action.data.id).subscribe({
        next: (value) => {
          this.store.dispatch(loadCategories());
        },
        error: () => {
          this.notification.showNotification("Category remove Error", "", "error");
        },
        complete: () => {
          this.notification.showNotification("Category remove succefully", "", "success");
        }
      })
    })
  ), { dispatch: false });
}
