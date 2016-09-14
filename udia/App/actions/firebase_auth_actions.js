/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';
import {SET_FIREBASE_USER, UNSET_FIREBASE_USER} from './types';

/**
 * Action for setting the firebase user.
 * @param {firebase.User} user - Firebase user object
 * @return {{type, payload: *}} - Redux action
 */
export function setFirebaseUser(user) {
  return {
    type: SET_FIREBASE_USER,
    payload: user
  };
}

/**
 * Action for removing the firebase user.
 * @return {{type, payload: null}} - Redux action
 */
export function unsetFirebaseUser() {
  return {
    type: UNSET_FIREBASE_USER,
    payload: null
  };
}
