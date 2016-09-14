/**
 * Copyright (C) Udia Software Incorporated - All Rights Reserved
 * Unauthorized viewing or copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alexander Wong <admin@alexander-wong.com>, September 2016
 */
'use strict';

import {TEST} from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case TEST:
      return action.payload;
  }
  return state;
}
