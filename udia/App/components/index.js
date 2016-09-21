/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import React, {Component} from 'react';
import {Navigator, StyleSheet, View} from 'react-native';

import Loading from './loading';
import Login from './login';
import Register from './register';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    // var {state, actions} = this.props;
    var routeId = route.id;

    switch (routeId) {
      case 'loading':
        return (
          <Loading
            {...this.props}
            navigator={navigator}/>
        );
      case 'login':
        return (
          <Login
            {...this.props}
            navigator={navigator}/>
        );
      case 'register':
        return (
          <Register
            {...this.props}
            navigator={navigator}/>
        );
      default:
        return (
          <Loading
            {...this.props}
            navigator={navigator}/>
        );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          style={styles.container}
          initialRoute={{id: 'loading', name: 'Loading'}}
          renderScene={this.renderScene.bind(this)}/>
      </View>
    );
  }
}
