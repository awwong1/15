/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import {combineReducers} from 'redux';
import FireBaseTestReducer from './firebase_test_reducer';

const rootReducer = combineReducers({
  test: FireBaseTestReducer,
});

export default rootReducer;
