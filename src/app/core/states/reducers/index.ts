import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '@shared/models/user.model';
import { AuthActions } from '../actions/action-types';

export const appFeatureKey = 'appState';

export interface AppState {
  user: User
}

const initialState: AppState = {
  user: undefined
}

export const appReducer = createReducer(
  initialState,
  on(AuthActions.signIn, (state, action) => ({...state, user: action.user })),
  on(AuthActions.signUp, (state, action) => ({...state, user: action.user })),
  on(AuthActions.signOut, (state, action) => ({...state, user: undefined })),
);

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
