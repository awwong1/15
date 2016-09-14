/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import {firebaseStorage} from '../firebase';

let FireBaseToolsStorage = {
  /**
   * The maximum time to retry operations other than uploads or downloads in milliseconds.
   *
   * @returns {FireBaseToolsStorage.maxOperationRetryTime|(function())|number}
   */
  maxOperationRetryTime: () => {
    return firebaseStorage.maxOperationRetryTime;
  },

  /**
   * The maximum time to retry uploads in milliseconds.
   *
   * @returns {FireBaseToolsStorage.maxUploadRetryTime|(function())|number}
   */
  maxUploadRetryTime: () => {
    return firebaseStorage.maxUploadRetryTime;
  },

  /**
   * Returns a reference for the given path in the default bucket.
   * https://firebase.google.com/docs/reference/js/firebase.storage.Storage#ref
   *
   * @param path {string}
   * @returns {*}
   */
  ref: (path) => {
    return firebaseStorage.ref(path);
  },

  /**
   * Returns a reference for the given absolute URL.
   * https://firebase.google.com/docs/reference/js/firebase.storage.Storage#refFromURL
   *
   * @param url {string}
   * @returns {*}
   */
  refFromUrl: (url) => {
    return firebaseStorage.refFromUrl(url);
  },

  /**
   * Set the new maximum operation retry time in milliseconds.
   * https://firebase.google.com/docs/reference/js/firebase.storage.Storage#setMaxOperationRetryTime
   *
   * @param time {number}
   * @returns {*|any}
   */
  setMaxOperationRetryTime: (time) => {
    return firebaseStorage.setMaxOperationRetryTime(time);
  },

  /**
   * Set the new maximum upload retry time in milliseconds.
   * https://firebase.google.com/docs/reference/js/firebase.storage.Storage#setMaxUploadRetryTime
   *
   * @param time {number}
   * @returns {*|any}
   */
  setMaxUploadRetryTime: (time) => {
    return firebaseStorage.setMaxUploadRetryTime(time);
  }
};

export default FireBaseToolsStorage;
