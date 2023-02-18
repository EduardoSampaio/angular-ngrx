import { User } from '@shared/models/user.model';
import { createAction, props } from "@ngrx/store";


export const signIn = createAction(
  "[AUTH] User signIn",
  props<{ user: User }>()
);

export const signOut = createAction(
  "[AUTH] User signOut"
);

export const signUp = createAction(
  "[AUTH] Registred new user",
  props<{ user: User }>()
);

