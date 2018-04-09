// @flow

import * as types from '../constants/actionTypes';
import type { SampleActionType } from '../flow/types/SampleActionType';

export const sampleAction = (message: string): SampleActionType => ({
  type: types.SAMPLE_ACTION,
  payload: { message }
});
