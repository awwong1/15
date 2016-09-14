/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  yup() {
    console.log('Yes')
  }

  nope() {
    console.log('No')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.padding} />
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.buttons} onPress={() => this.nope()}>
            <Text>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text>Udia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={() => this.yup()}>
            <Text>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
//onPress = {() => this.renderNope()}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  padding: {
    flex: 9
  },
  buttons: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  buttonSmall: {
    width: 50,
    height: 50,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  card: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    width: 350,
    height: 420,
  }

});
