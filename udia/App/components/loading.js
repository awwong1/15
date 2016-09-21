/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {RICH_BLACK} from '../styles/colors';
import FirebaseToolsAuth from '../utils/firebase/auth';
import {setFirebaseUser} from '../actions/firebase_auth_actions';

import Logo from './logo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RICH_BLACK,
    alignItems: 'center'
  },
  padding1: {
    flex: 1
  }
});

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new Promise((resolve, reject) => {
      FirebaseToolsAuth.onAuthStateChanged(user => {
        this.props.onUserLoaded(user);
        resolve(user);
      }, error => {
        reject(error);
      });
    }).then(user => {
      console.log('user', user);
      this.props.navigator.replace({id: 'login', name: 'Login'});
      console.log('done navigating');
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.padding1}/>
        <Logo/>
        <Text style={styles.padding1}/>
        <ActivityIndicator/>
        <Text style={styles.padding1}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onUserLoaded: user => {
      dispatch(setFirebaseUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
