import { Category } from '@shared/models/category.model';
import { createAction, props } from '@ngrx/store';

export const loadCategories = createAction(
  '[Category] Load categories'
);

export const loadCategoriessSuccess = createAction(
  '[Category] Load Categories Success',
  props<{ data: Category }>()
);

export const loadCategoriesFailure = createAction(
  '[Category] Load Categories Failure',
  props<{ error: any }>()
);

export const removeCategory = createAction(
  '[Category] Remove Category',
  props<{ data: Category }>()
);

export const updateCategory = createAction(
  '[Category] Update Category',
  props<{ data: Category }>()
);

