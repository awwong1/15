/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {GAINSBORO} from '../styles/colors';

const styles = StyleSheet.create({
  text: {
    color: GAINSBORO
  }
});

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Home</Text>
      </View>
    );
  }
}
