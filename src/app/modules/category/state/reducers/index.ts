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
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const FeatureKey = 'categoryState';

export interface CategoryState extends EntityState<Category> {
  categories: Array<Category>,
  current: Category,
  allCategoryLoaded: boolean
}

export const adapter = createEntityAdapter<Category>();

export const initialstate =  adapter.getInitialState({
  allCategoryLoaded: false
});

export const reducer = createReducer(
  initialstate,
  on(CategoryActions.addNewCategory, (state , action) => ({...state, current: action.data})),
  on(CategoryActions.removeCategory, (state , action) => ({...state, current: action.data})),
  on(CategoryActions.updateCategory, (state , action) => ({...state, current: action.data})),
  on(CategoryActions.loadCategories, (state) => ({...state})),
  on(CategoryActions.loadCategoriessSuccess, (state, action) => adapter.addMany(action.categories, {...state, allCategoryLoaded: true})),
)

