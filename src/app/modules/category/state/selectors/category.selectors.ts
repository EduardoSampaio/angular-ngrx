import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from '../reducers';

export const selectCategoryState = createFeatureSelector<CategoryState>("categoryState");

export const selectCategoriesList = createSelector(
  selectCategoryState,
  (categoryState) => categoryState.categories
)

