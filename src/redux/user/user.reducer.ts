import { UserActionTypes, UserTypes, ActionTypes } from './user.types';

const initialState: UserTypes = {
  currentUser: null,
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypes.setUser:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
