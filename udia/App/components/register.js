/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import FireBaseToolsAuth from '../utils/firebase/auth';
import {CORN, GAINSBORO, GUNMETAL, OLD_LAVENDER, RICH_BLACK} from '../styles/colors';
import Logo from './logo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RICH_BLACK,
    alignItems: 'center'
  },
  text: {
    color: GAINSBORO
  },
  padding1: {
    flex: 1
  },
  error: {
    color: CORN,
    backgroundColor: GUNMETAL
  },
  input: {
    color: GUNMETAL,
    textShadowColor: OLD_LAVENDER,
    backgroundColor: GAINSBORO,
    width: 500
  },
  label: {
    backgroundColor: GUNMETAL,
    color: GAINSBORO
  },
  inputContainer: {},
  inputStyle: {
    backgroundColor: GAINSBORO,
    width: 1000
  },
  button: {
    backgroundColor: OLD_LAVENDER,
    width: 150,
    height: 100
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
  }

  onPressBack() {
    this.props.navigator.pop(0);
  }

  onPressRegister() {
    var state = this.state ? this.state : {};
    var email = state.email ? state.email : '';
    var password = state.password ? state.password : '';
    var password2 = state.password2 ? state.password2 : '';
    if (password === password2) {
      FireBaseToolsAuth.createUserWithEmailAndPassword(email, password)
        .then()
        .catch(error => {
          this.setState(function(previousState) {
            return {...previousState, error: error}
          });
        });
    } else {
      var error = 'Error: Passwords do not match.';
      this.setState(function(previousState) {
        return {...orevuiysState, error: error}
      })
    }
    console.log(state, state.error ? state.error : undefined);
  }

  render() {
    this.count += 1;
    console.log('render', this.count);
    return (
      <View style={styles.container}>
        <Text style={styles.padding1}/>
        <Logo/>
        {(() => {
          if (this.state && this.state.error) {
            return (
              <Text style={styles.error}>{'' + this.state.error}</Text>
            )
          } else {
            return <Text style={styles.label}>Join Udia.</Text>
          }
        })()}
        <Text style={styles.label}>Email:</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputStyle}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
              style={styles.input}
              selectTextOnFocus={true}
              placeholder="Enter your email"
              onChangeText={(text) => this.setState(function(previousState) {
                return {...previousState, email: text};
              })}
            />
          </View>
        </View>
        <Text style={styles.label}>Password:</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputStyle}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
              style={styles.input}
              secureTextEntry={true}
              selectTextOnFocus={true}
              placeholder="Enter your password"
              onChangeText={(text) => this.setState(function(previousState) {
                return {...previousState, password: text};
              })}
            />
          </View>
          <Text style={styles.padding1}/>
        </View>
        <Text style={styles.label}>Confirm Password:</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputStyle}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
              style={styles.input}
              secureTextEntry={true}
              selectTextOnFocus={true}
              placeholder="Enter your password"
              onChangeText={(text) => this.setState(function(previousState) {
                return {...previousState, password2: text};
              })}
            />
          </View>
          <Text style={styles.padding1}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={this.onPressBack.bind(this)}>
            <View style={styles.button}>
              <Text>Back</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onPressRegister.bind(this)}>
            <View style={styles.button}>
              <Text>Register</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text style={styles.padding1}/>
      </View>
    );
  }
}
