/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BACKGROUND_COLOR = '#f7f7f7';
const BUTTON_BORDER = '#e7e7e7';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR
  },
  padding: {
    flex: 9
  },
  buttons: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: BUTTON_BORDER,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  buttonContainer: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}
});

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  yup() {
    console.log('Yes');
  }

  nope() {
    console.log('No');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.padding}/>
        <View style={styles.buttonContainer}>
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
    );
  }
}
