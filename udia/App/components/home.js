/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {GAINSBORO, GUNMETAL} from '../styles/colors';
import Logo from './logo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GUNMETAL,
    alignItems: 'center'
  },
  text: {
    color: GAINSBORO
  },
  padding: {
    flex: 1
  },
  username: {
    color: GAINSBORO,
  },
  label: {
    color: GAINSBORO
  },
  password: {
    color: GAINSBORO
  },
  input: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.padding}/>
        <Logo/>
        <View style={styles.input}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={false}
            style={styles.username}
            selectTextOnFocus={true}
            placeholder="Enter your username"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={false}
            style={styles.password}
            secureTextEntry={true}
            selectTextOnFocus={true}
            placeholder="Enter your password"
          />
        </View>
        <Text style={styles.padding}/>
      </View>
    );
  }
}
