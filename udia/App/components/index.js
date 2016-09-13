import React, {Component} from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Home from './home';


export default class Index extends Component {
  constructor(props) {
    super(props)

  }

  renderScene(route, navigator) {
    var {state, actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home.js') {
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
      <View style={{flex: 1}}>
        <Navigator
          style={{flex: 1}}
          ref={'NAV'}
          initialRoute={{id: 'home.js', name: 'home.js'}}
          renderScene={this.renderScene.bind(this)}/>
      </View>
    )
  }
}
