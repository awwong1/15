/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import {SET_FIREBASE_USER, UNSET_FIREBASE_USER} from '../actions/types';

/**
 * Reducer function for FirebaseUserReducer. Handles every interaction involving authentication and self
 * Should set the state currentUser
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = null, action) {
  switch (action.type) {
    case SET_FIREBASE_USER:
      return action.payload;
    case UNSET_FIREBASE_USER:
      return action.payload;
    default:
      return state;
  }
}
