/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Polygon, Path} from 'react-native-svg';

import {RICH_BLACK} from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RICH_BLACK
  },
  padding: {
    flex: 9
  }
});

// Constants for the Logo SVG
const POLY_ONE = "38.182,57.753 20.18,47.91 20.18,42.455 38.182,32.652 38.182,39.074 25.625,45.113 38.182,51.379";
const POLY_TWO = "39.848,62.08 46.351,27.918 50.136,27.918 43.56,62.08";
const POLY_THREE = "51.8,57.78 51.8,51.4 64.372,45.181 51.8,39.028 51.8,32.696 69.82,42.5 69.82,47.91";
const SVG_PATH = "M44.999,86.031L9.465,65.517V24.484L44.999,3.969l35.536,20.516v41.029L44.999,86.031L44.999,86.031z " +
  "M13.07,63.434  l31.929,18.434L76.93,63.434V26.566L44.999,8.131L13.07,26.565V63.434L13.07,63.434z";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.padding}/>
        <Svg>
          <Polygon points={POLY_ONE}/>
          <Polygon points={POLY_TWO}/>
          <Polygon points={POLY_THREE}/>
          <Path d={SVG_PATH}/>
        </Svg>
        <Text style={styles.padding}/>
      </View>
    );
  }
}
