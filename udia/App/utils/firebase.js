/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../config';

if (FIREBASE_CONFIG.apiKey.length < 1) {
  throw Error('Firebase Configuration is not set.', 1);
}

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const firebaseStorage = firebaseApp.storage();
