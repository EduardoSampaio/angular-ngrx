import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { Category } from '@shared/models/category.model';
import { CategoryActions } from '../action/category-action-type';

export const FeatureKey = 'categoryState';

export interface CategoryState {
  categories: Array<Category>,
  current: Category,
}

const initialState: CategoryState = {
  categories: [],
  current: undefined,
}

export const reducer = createReducer(
  initialState,
  on(CategoryActions.addNewCategory, (state , action) => ({...state, current: action.data})),
  on(CategoryActions.removeCategory, (state , action) => ({...state, current: action.data})),
  on(CategoryActions.updateCategory, (state , action) => ({...state, current: action.data})),
  on(CategoryActions.loadCategories, (state) => ({...state})),
  on(CategoryActions.loadCategoriessSuccess, (state, action) => ({...state, categories: action.categories})),
)
