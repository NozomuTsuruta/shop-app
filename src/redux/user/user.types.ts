import { User } from 'firebase';
import { Action } from 'redux';

export const ActionTypes = {
  setUser: 'SET_USER',
  clearUser: 'CLEAR_USER',
} as const;

export type UserTypes = {
  currentUser: User | null;
};

interface SetUserAction extends Action {
  type: typeof ActionTypes.setUser;
  payload: User | null;
}

interface ClearUserAction extends Action {
  type: typeof ActionTypes.clearUser;
  payload: User | null;
}

export type UserActionTypes = SetUserAction | ClearUserAction;
