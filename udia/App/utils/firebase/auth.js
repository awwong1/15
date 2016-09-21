/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import {firebaseAuth} from '../firebase';

let FireBaseToolsAuth = {
  /**
   * The currently signed-in user (or null).
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#currentUser
   *
   * @return {firebase.User|null}
   *   The firebase User or null.
   */
  currentUser: () => {
    return firebaseAuth.currentUser;
  },

  /**
   * Applies a verification code sent to the user by email or other out-of-band mechanism.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#applyActionCode
   *
   * @param {string} code - A verification code sent to the user.
   * @return {!firebase.Promise.<void>}
   *   non-null firebase.Promise containing void
   */
  applyActionCode: code => {
    return firebaseAuth.applyActionCode(code);
  },

  /**
   * Checks a verification code sent to the user by email or other out-of-band mechanism.
   *
   * Returns metadata about the code.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#checkActionCode
   *
   * @param {string} code - A verification code sent to the user.
   * @return {!firebase.Promise.<!firebase.auth.ActionCodeInfo>}
   *   non-null firebase.Promise containing non-null firebase.auth.ActionCodeInfo
   */
  checkActionCode: code => {
    return firebaseAuth.checkActionCode(code);
  },

  /**
   * Completes the password reset process, given a confirmation code and new password.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#confirmPasswordReset
   *
   * @param {string} code - The confirmation code send via email to the user
   * @param {string} newPassword - The new password
   * @return {!firebase.Promise.<void>}
   *   non-null firebase.Promise containing void
   */
  confirmPasswordReset: (code, newPassword) => {
    return firebaseAuth.confirmPasswordReset(code, newPassword);
  },

  /**
   * Creates a new user account associated with the specified email address and password.
   * On successful creation of the user account, this user will also be signed in to your application.
   * User account creation can fail if the account already exists or the password is invalid.
   * Note: The email address acts as a unique identifier for the user and enables an email-based password reset.
   * This function will create a new user account and set the initial user password.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
   *
   * @param {string} email - The user's email address
   * @param {string} password - The user's chosen password
   * @return {!firebase.Promise.<!firebase.User>}
   *   non-null firebase.Promise containing non-null firebase.User
   */
  createUserWithEmailAndPassword: (email, password) => {
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  },

  /**
   * Gets the list of provider IDs that can be used to sign in for the given email address.
   * Useful for an "identifier-first" sign-in flow.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#fetchProvidersForEmail
   *
   * @param {string} email - An email address
   * @return {!firebase.Promise.<!Array.<string>>}
   *   non-null firebase.Promise containing non-null Array of string
   */
  fetchProvidersForEmail: email => {
    return firebaseAuth.fetchProvidersForEmail(email);
  },

  /**
   * Returns a UserCredential from the redirect-based sign-in flow.
   * If sign-in succeeded, returns the signed in user. If sign-in was unsuccessful, fails with an error.
   * If no redirect operation was called, returns a UserCredential with a null User.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#getRedirectResult
   *
   * @return {!firebase.Promise.<!firebase.auth.UserCredential>}
   *   non-null firebase.Promise containing non-null firebase.auth.UserCredential
   */
  getRedirectResult: () => {
    return firebaseAuth.getRedirectResult();
  },

  /**
   * Adds an observer for auth state changes.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onAuthStateChanged
   *
   * @param {!Object|!(function(!firebase.User))} nextOrObserver - An observer object or a function triggered on change.
   * @param {function(!firebase.auth.Error)} [optError] - Optional. A function triggered on auth error.
   * @param {function()} [optCompleted] - Optional. A function triggered when the observer is removed.
   * @return {!(function())} The unsubscribe function for the observer
   */
  onAuthStateChanged: (nextOrObserver, optError, optCompleted) => {
    return firebaseAuth.onAuthStateChanged(nextOrObserver, optError, optCompleted);
  },

  /**
   * Sends a password reset email to the given email address.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#sendPasswordResetEmail
   *
   * @param {string} email - The email address with the password to be reset.
   * @return {!firebase.Promise.<void>} non-null firebase.Promise containing void
   */
  sendPasswordResetEmail: email => {
    return firebaseAuth.sendPasswordResetEmail(email);
  },

  /**
   * Asynchronously signs in as an anonymous user.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInAnonymously
   *
   * @return {!firebase.Promise.<!firebase.User>} non-null firebase.Promise containing non-null firebase.User
   */
  signInAnonymously: () => {
    return firebaseAuth.signInAnonymously();
  },

  /**
   * Asynchronously signs in with the given credentials.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithCredential
   *
   * @param {firebase.auth.AuthCredential} credential - The auth credential.
   * @return {!firebase.Promise.<!firebase.User>} non-null firebase.Promise containing non-null firebase.User
   */
  signInWithCredential: credential => {
    return firebaseAuth.signInWithCredential(credential);
  },

  /**
   * Asynchronously signs in using a custom token.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithCustomToken
   *
   * @param {string} token - The custom token to sign in with.
   * @return {!firebase.Promise.<!firebase.User>} non-null firebase.Promise containing non-null firebase.User
   */
  signInWithCustomToken: token => {
    return firebaseAuth.signInWithCustomToken(token);
  },

  /**
   * Asynchronously signs in using an email and password.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
   *
   * @param {string} email - The user's email address
   * @param {string} password - The users password
   * @return {!firebase.Promise.<!firebase.User>} non-null firebase.Promise containing non-null firebase.User
   */
  signInWithEmailAndPassword: (email, password) => {
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  },

  /**
   * Authenticates a Firebase client using a popup-based OAuth authentication flow.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithPopup
   *
   * @param {firebase.auth.AuthProvider} provider - The provider to authenticate, must be an OAuth provider.
   * @return {!firebase.Promise.<!firebase.auth.UserCredential>}
   *   non-null firebase.Promise containing non-null firebase.auth.UserCredential
   */
  signInWithPopup: provider => {
    return firebaseAuth.signInWithPopup(provider);
  },

  /**
   * Authenticates a Firebase client using a full-page redirect flow.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithRedirect
   *
   * @param {firebase.auth.AuthProvider} provider - The provider to authenticate, must be an OAuth provider.
   * @return {!firebase.Promise.<void>} non-null firebase.Promise containing void
   */
  signInWithRedirect: provider => {
    return firebaseAuth.signInWithRedirect(provider);
  },

  /**
   * Signs out the current user.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signOut
   *
   * @return {!firebase.Promise.<void>} non-null firebase.Promise containing void
   */
  signOut: () => {
    return firebaseAuth.signOut();
  },

  /**
   * Checks a password reset code sent to the user by email or other out-of-band mechanism.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#verifyPasswordResetCode
   *
   * @param {string} code - A verification code sent to the user.
   * @return {!firebase.Promise.<string>} non-null firebase.Promise containing string
   */
  verifyPasswordResetCode: code => {
    return firebaseAuth.verifyPasswordResetCode(code);
  }
};

export default FireBaseToolsAuth;
