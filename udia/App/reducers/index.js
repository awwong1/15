import * as types from '../actions/actionTypes';

const initialState = {
  navColor: '#fff',
  navStyle: {backgroundColor: '#ff585b', color: '#fff', padding: 20},
  userDeets: {
    email: "test@udia.ca",
  }
};

export function udia(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {...state,};
    default:
      return state;
  }
}