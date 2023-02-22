import { AppState } from '@core/states/reducers/index';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectAuthState = createFeatureSelector<AppState>("appState");

export const isLoggedIn = createSelector(
  selectAuthState,
  (appState) => !!appState.authState.user && localStorage.getItem("user") !== undefined
);

