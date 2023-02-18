import { createReducer, on } from "@ngrx/store";
import { User } from "@shared/models/user.model";
import { AppState } from ".";
import { AuthActions } from "../actions/action-types";

export interface AuthState {
  user: User
}


const initialState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signIn, (state, action) => ({...state, user: action.user })),
  on(AuthActions.signUp, (state, action) => ({...state, user: action.user })),
  on(AuthActions.signOut, (state, action) => ({...state, user: undefined })),
);
