import {firebaseAuth} from '../firebase';

let FireBaseToolsAuth = {
  /**
   * The currently signed-in user (or null).
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#currentUser
   *
   * @returns {firebase.User|null}
   */
  currentUser: () => {
    return firebaseAuth.currentUser;
  },

  /**
   * Applies a verification code sent to the user by email or other out-of-band mechanism.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#applyActionCode
   *
   * @param code {string}
   * @returns {firebase.Promise<any>|!firebase.Promise.<void>}
   */
  applyActionCode: (code) => {
    return firebaseAuth.applyActionCode(code);
  },

  /**
   * Checks a verification code sent to the user by email or other out-of-band mechanism.
   *
   * Returns metadata about the code.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#checkActionCode
   *
   * @param code {string}
   * @returns {firebase.Promise<any>|!firebase.Promise.<!firebase.auth.ActionCodeInfo>}
   */
  checkActionCode: (code) => {
    return firebaseAuth.checkActionCode(code);
  },

  /**
   * Completes the password reset process, given a confirmation code and new password.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#confirmPasswordReset
   *
   * @param code {string}
   * @param newPassword {string}
   * @returns {!firebase.Promise.<void>|firebase.Promise<any>}
   */
  confirmPasswordReset: (code, newPassword) => {
    return firebaseAuth.confirmPasswordReset(cpde, newPassword);
  },

  /**
   * Creates a new user account associated with the specified email address and password.
   * On successful creation of the user account, this user will also be signed in to your application.
   * User account creation can fail if the account already exists or the password is invalid.
   * Note: The email address acts as a unique identifier for the user and enables an email-based password reset.
   * This function will create a new user account and set the initial user password.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
   *
   * @param email {string}
   * @param password {string}
   * @returns {!firebase.Promise.<!firebase.User>|firebase.Promise<any>}
   */
  createUserWithEmailAndPassword: (email, password) => {
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  },

  /**
   * Gets the list of provider IDs that can be used to sign in for the given email address.
   * Useful for an "identifier-first" sign-in flow.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#fetchProvidersForEmail
   *
   * @param email {string}
   * @returns {firebase.Promise<any>|!firebase.Promise.<!Array.<string>>}
   */
  fetchProvidersForEmail: (email) => {
    return firebaseAuth.fetchProvidersForEmail(email);
  },

  /**
   * Returns a UserCredential from the redirect-based sign-in flow.
   * If sign-in succeeded, returns the signed in user. If sign-in was unsuccessful, fails with an error.
   * If no redirect operation was called, returns a UserCredential with a null User.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#getRedirectResult
   *
   * @returns {*|firebase.Promise<any>|!firebase.Promise.<!firebase.auth.UserCredential>|{name, b}}
   */
  getRedirectResult: () => {
    return firebaseAuth.getRedirectResult();
  },

  /**
   * Adds an observer for auth state changes.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onAuthStateChanged
   *
   * @param nextOrObserver
   * @param opt_error
   * @param opt_completed
   * @returns {*|!(function())|(()=>any)|{name, b}} The unsubscribe function for the observer
   */
  onAuthStateChanged: (nextOrObserver, opt_error, opt_completed) => {
    return firebaseAuth.onAuthStateChanged(nextOrObserver, opt_error, opt_completed)
  },

  /**
   * Sends a password reset email to the given email address.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#sendPasswordResetEmail
   *
   * @param email {string}
   * @returns {*|firebase.Promise<any>|!firebase.Promise.<void>|{name, b}}
   */
  sendPasswordResetEmail: (email) => {
    return firebaseAuth.sendPasswordResetEmail(email);
  },

  /**
   * Asynchronously signs in as an anonymous user.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInAnonymously
   *
   * @returns {*|!firebase.Promise.<!firebase.User>|firebase.Promise<any>|{name, b}}
   */
  signInAnonymously: () => {
    return firebaseAuth.signInAnonymously();
  },

  /**
   * Asynchronously signs in with the given credentials.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithCredential
   *
   * @param credential {firebase.auth.AuthCredential}
   * @returns {*|!firebase.Promise.<!firebase.User>|firebase.Promise<any>|{name, b}}
   */
  signInWithCredential: (credential) => {
    return firebaseAuth.signInWithCredential(credential);
  },

  /**
   * Asynchronously signs in using a custom token.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithCustomToken
   *
   * @param token {string}
   * @returns {*|!firebase.Promise.<!firebase.User>|firebase.Promise<any>|{name, b}}
   */
  signInWithCustomToken: (token) => {
    return firebaseAuth.signInWithCustomToken(token);
  },

  /**
   * Asynchronously signs in using an email and password.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
   *
   * @param email {string}
   * @param password {string}
   * @returns {*|firebase.Promise<any>|!firebase.Promise.<!firebase.User>|{name, b}}
   */
  signInWithEmailAndPassword: (email, password) => {
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  },

  /**
   * Authenticates a Firebase client using a popup-based OAuth authentication flow.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithPopup
   *
   * @param provider {firebase.auth.AuthProvider}
   * @returns {*|!firebase.Promise.<!firebase.auth.UserCredential>|firebase.Promise<any>|{name, b}}
   */
  signInWithPopup: (provider) => {
    return firebaseAuth.signInWithPopup(provider);
  },

  /**
   * Authenticates a Firebase client using a full-page redirect flow.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithRedirect
   *
   * @param provider {firebase.auth.AuthProvider}
   * @returns {*|firebase.Promise<any>|!firebase.Promise.<void>|{name, b}}
   */
  signInWithRedirect: (provider) => {
    return firebaseAuth.signInWithRedirect(provider);
  },

  /**
   * Signs out the current user.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signOut
   *
   * @returns {*|firebase.Promise<any>|!firebase.Promise.<void>|{name, b}}
   */
  signOut: () => {
    return firebaseAuth.signOut();
  },

  /**
   * Checks a password reset code sent to the user by email or other out-of-band mechanism.
   * https://firebase.google.com/docs/reference/js/firebase.auth.Auth#verifyPasswordResetCode
   *
   * @param code {string}
   * @returns {*|!firebase.Promise.<string>|firebase.Promise<any>|{name, b}}
   */
  verifyPasswordResetCode: (code) => {
    return firebaseAuth.verifyPasswordResetCode(code);
  }
};

export default FireBaseToolsAuth;
