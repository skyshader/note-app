// @flow

import React, { PureComponent } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';

import type { SampleType } from '../../flow/types/SampleType';
import type { StateType } from '../../flow/types/StateType';
import type { DispatchType } from '../../flow/types/DispatchType';
import { sampleAction } from '../../actions';

type PropType = {
  sample: SampleType,
  onSampleAction: (message: string) => any
};

class SampleContainer extends PureComponent<PropType> {
  static displayName: ?string = 'SampleContainer';

  componentDidMount() {
    this.props.onSampleAction('This is a note app!');
  }

  shouldComponentUpdate(nextProps: PropType): boolean {
    return (nextProps.sample.message !== this.props.sample.message);
  }

  render(): Element<any> {
    return (
      <div className="Sample-Container">
        { this.props.sample.message }
      </div>
    );
  }
}

const mapStateToProps = (state: StateType): { sample: SampleType } => {
  return {
    sample: state.sample,
  }
};

type MapDispatchToPropsReturnType = { onSampleAction: (message: string) => any };
const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsReturnType => {
  return {
    onSampleAction: (message: string) => {
      dispatch(sampleAction(message))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
