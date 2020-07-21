import { ActionTypes, UserActionTypes } from './user.types';

export const setUser = (user: any): UserActionTypes => ({
  type: ActionTypes.setUser,
  payload: user,
});
