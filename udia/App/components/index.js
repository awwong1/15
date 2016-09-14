/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import {Component} from 'react';
import {Navigator, StyleSheet, View} from 'react-native';

import Home from './home';

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
      case 'home':
        return (
          <Home
            {...this.props}
            userData={route.userData}
            navigator={navigator}/>
        );
      default:
        return (
          <Home
            {...this.props}
            userData={route.userData}
            navigator={navigator}/>
        );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          style={styles.container}
          ref={'NAV'}
          initialRoute={{id: 'home', name: 'Home'}}
          renderScene={this.renderScene.bind(this)}/>
      </View>
    );
  }
}
