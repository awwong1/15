/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import {firebaseDatabase} from '../firebase';

let FireBaseToolsDatabase = {

  /**
   * Disconnect from the server (all database operations will be completed offline).
   * https://firebase.google.com/docs/reference/js/firebase.database.Database#goOffline
   *
   * @return {*|any} unused
   */
  goOffline: () => {
    return firebaseDatabase.goOffline();
  },

  /**
   * (Re)connect to the server and synchronize the offline database state with the server state.
   * https://firebase.google.com/docs/reference/js/firebase.database.Database#goOnline
   *
   * @return {*|any} unused
   */
  goOnline: () => {
    return firebaseDatabase.goOnline();
  },

  /**
   * Returns a Reference to the root or the specified path.
   * https://firebase.google.com/docs/reference/js/firebase.database.Database#ref
   *
   * @param {string} [path] - Optional path to get reference for
   * @return {!firebase.database.Reference} Firebase reference.
   */
  ref: path => {
    return firebaseDatabase.ref(path);
  },

  /**
   * Returns a reference to the root or the path specified in url.
   * An exception is thrown if the url is not in the same domain as the current database.
   * https://firebase.google.com/docs/reference/js/firebase.database.Database#refFromURL
   *
   * @param {string} url - Url to get reference for
   * @return {!firebase.database.Reference} Firebase reference.
   */
  refFromUrl: url => {
    return firebaseDatabase.refFromUrl(url);
  }
};

export default FireBaseToolsDatabase;
