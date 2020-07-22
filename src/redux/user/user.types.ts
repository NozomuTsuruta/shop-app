import { Action } from 'redux';
import { Profile } from '../../Types';

export const ActionTypes = {
  setUser: 'SET_USER',
  clearUser: 'CLEAR_USER',
} as const;

export type UserTypes = {
  currentUser: Profile | null;
};

interface SetUserAction extends Action {
  type: typeof ActionTypes.setUser;
  payload: Profile | null;
}

interface ClearUserAction extends Action {
  type: typeof ActionTypes.clearUser;
  payload: Profile | null;
}

export type UserActionTypes = SetUserAction | ClearUserAction;
