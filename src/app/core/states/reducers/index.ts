import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  State
} from '@ngrx/store';
import { authReducer, AuthState } from './auth.reducer';

export const stateFeatureKey = 'appState';

export interface AppState {
  authState: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
