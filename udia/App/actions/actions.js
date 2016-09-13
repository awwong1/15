import FireBaseTools from '../utils/firebase';
import {TEST} from './types';

export function test(provider) {
  const request = FireBaseTools.test(provider);
  return {
    type: TEST,
    payload: request
  }
}
