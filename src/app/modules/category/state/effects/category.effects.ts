import { CategoryService } from './../../services/category.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryActions } from '../action/category-action-type';
import { catchError, concatMap, EMPTY, map, mergeMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { NotificationService } from '@shared/services/notification.service';
import { loadCategories } from '../action/crud-category.actions';
import { CategoryState } from '../reducers';



@Injectable()
export class CategoryEffects {

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService,
    private notification: NotificationService,
    private store: Store<CategoryState>) { }

  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActions.loadCategories),
    mergeMap(() => this.categoryService.listAll()
      .pipe(map(categories => CategoryActions.loadCategoriessSuccess({ categories })),
        catchError(() => EMPTY)
      ))
  ));

  addNewCategory$ = createEffect(() => this.actions$.pipe(
    ofType(CategoryActions.addNewCategory),
    tap((action) => {
      this.categoryService.add(action.data).subscribe({
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
      this.categoryService.update(action.data).subscribe({
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
      this.categoryService.delete(action.data).subscribe({
        next: () => {
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
