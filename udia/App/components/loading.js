/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux'
import Svg, {Polygon, Path} from 'react-native-svg';

import {RICH_BLACK, GAINSBORO, OLD_LAVENDER} from '../styles/colors';
import FirebaseToolsAuth from '../utils/firebase/auth';
import {setFirebaseUser} from '../actions/firebase_auth_actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RICH_BLACK,
    alignItems: 'center'
  },
  padding: {
    flex: 9
  },
  titleText: {
    color: GAINSBORO,
    fontSize: 30
  }
});

// Constants for the Logo SVG
const POLY_ONE = "38.182,57.753 20.18,47.91 20.18,42.455 38.182,32.652 38.182,39.074 25.625,45.113 38.182,51.379";
const POLY_TWO = "39.848,62.08 46.351,27.918 50.136,27.918 43.56,62.08";
const POLY_THREE = "51.8,57.78 51.8,51.4 64.372,45.181 51.8,39.028 51.8,32.696 69.82,42.5 69.82,47.91";
const SVG_PATH = "M44.999,86.031L9.465,65.517V24.484L44.999,3.969l35.536,20.516v41.029L44.999,86.031L44.999,86.031z " +
  "M13.07,63.434 l31.929,18.434L76.93,63.434V26.566L44.999,8.131L13.07,26.565V63.434L13.07,63.434z";

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
      // TODO: Move to HOME state
    }).catch(error => {
      console.error(error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.padding}/>
        <Svg height="90" width="81">
          <Polygon points={POLY_ONE} fill={GAINSBORO} stroke={OLD_LAVENDER} strokeWidth="1"/>
          <Polygon points={POLY_TWO} fill={GAINSBORO} stroke={OLD_LAVENDER} strokeWidth="1"/>
          <Polygon points={POLY_THREE} fill={GAINSBORO} stroke={OLD_LAVENDER} strokeWidth="1"/>
          <Path d={SVG_PATH} fill={GAINSBORO} stroke={OLD_LAVENDER} strokeWidth="1"/>
        </Svg>
        <Text style={styles.padding}/>
        <ActivityIndicator/>
        <Text style={styles.padding}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    onUserLoaded: user => {
      dispatch(setFirebaseUser(user));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
