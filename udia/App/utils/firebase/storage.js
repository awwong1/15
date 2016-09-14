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
   * @return {FireBaseToolsStorage.maxOperationRetryTime|number} Number (milliseconds)
   */
  maxOperationRetryTime: () => {
    return firebaseStorage.maxOperationRetryTime;
  },

  /**
   * The maximum time to retry uploads in milliseconds.
   *
   * @return {FireBaseToolsStorage.maxUploadRetryTime|number} Number (milliseconds)
   */
  maxUploadRetryTime: () => {
    return firebaseStorage.maxUploadRetryTime;
  },

  /**
   * Returns a reference for the given path in the default bucket.
   * https://firebase.google.com/docs/reference/js/firebase.storage.Storage#ref
   *
   * @param {string} [path] - Optional. A relative path to initialize the reference with.
   *   For example path/to/image.jpg. If not passed, the returned reference points to the bucket root.
   * @return {firebase.storage.Reference} Storage reference for the given path
   */
  ref: path => {
    return firebaseStorage.ref(path);
  },

  /**
   * Returns a reference for the given absolute URL.
   * https://firebase.google.com/docs/reference/js/firebase.storage.Storage#refFromURL
   *
   * @param {string} url - A URL in the form:
   *   1) a gs:// URL, for example gs://bucket/files/image.png
   *   2) a download URL taken from object metadata.
   * @return {firebase.storage.Reference} Storage reference for the given URL
   */
  refFromUrl: url => {
    return firebaseStorage.refFromUrl(url);
  },

  /**
   * Set the new maximum operation retry time in milliseconds.
   * https://firebase.google.com/docs/reference/js/firebase.storage.Storage#setMaxOperationRetryTime
   *
   * @param {number} time - The new maximum operation retry time in milliseconds.
   * @return {*|any} unused
   */
  setMaxOperationRetryTime: time => {
    return firebaseStorage.setMaxOperationRetryTime(time);
  },

  /**
   * Set the new maximum upload retry time in milliseconds.
   * https://firebase.google.com/docs/reference/js/firebase.storage.Storage#setMaxUploadRetryTime
   *
   * @param {number} time - The new maximum upload retry time in milliseconds.
   * @return {*|any} unused
   */
  setMaxUploadRetryTime: time => {
    return firebaseStorage.setMaxUploadRetryTime(time);
  }
};

export default FireBaseToolsStorage;
