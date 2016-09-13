import {combineReducers} from 'redux';
import FireBaseTestReducer from './firebase_test_reducer';

const rootReducer = combineReducers({
  test: FireBaseTestReducer,
});

export default rootReducer;
