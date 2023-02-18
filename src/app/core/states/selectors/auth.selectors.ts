import { AppState } from './../reducers/index';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectAuthState = createFeatureSelector<AppState>("appState");

export const isLoggedIn = createSelector(
  selectAuthState,
  (appState) => !!appState.user
);

