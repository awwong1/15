import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../config';

if (FIREBASE_CONFIG.apiKey.length < 1) {
  throw Error('Firebase Configuration is not set.', 1);
}

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const firebaseStorage = firebaseApp.storage();
