import {TEST} from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case TEST:
      return action.payload;
  }
  return state;
}
