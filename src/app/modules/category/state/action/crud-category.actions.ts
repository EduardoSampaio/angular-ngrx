import { Category } from '@shared/models/category.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const loadCategories = createAction(
  '[Category] Load categories'
);

export const loadCategoriessSuccess = createAction(
  '[Category] Load Categories Success',
  props<{ categories: Category[] }>()
);

export const removeCategory = createAction(
  '[Category] Remove Category',
  props<{ data: Category }>()
);

export const updateCategory = createAction(
  '[Category] Update Category',
  props<{ data: Category }>()
);


export const addNewCategory = createAction(
  '[Category] Add New Category',
  props<{ data: Category }>()
);

