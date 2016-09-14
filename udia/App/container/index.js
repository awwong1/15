/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import Components from '../components/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


export default class extends Component {
  //noinspection JSMethodCanBeStatic
  render() {
    return (
      <View style={{flex: 1}}>
        <Provider store={store}>
          <Components/>
        </Provider>
      </View>
    );
  }
}