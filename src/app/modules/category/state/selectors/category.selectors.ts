import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState, adapter } from '../reducers';

export const selectCategoryState = createFeatureSelector<CategoryState>("categoryState");

const selectors = adapter.getSelectors();
const selectAll = selectors.selectAll;

export const selectCategoriesList = createSelector(
  selectCategoryState,
  selectAll
)

export const isAllCategoryLoaded = createSelector(
  selectCategoryState,
  state => state.allCategoryLoaded
);
