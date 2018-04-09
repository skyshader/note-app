// @flow

import { SAMPLE_ACTION } from '../constants/actionTypes';
import type { SampleType } from '../flow/types/SampleType';
import type { SampleActionType } from '../flow/types/SampleActionType';

const initialState: SampleType = {
  message: null
};

const sample = (state: SampleType = initialState, action: SampleActionType): SampleType => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return Object.assign({}, state, { message: action.payload.message });

    default:
      return state;
  }
};

export default sample;
