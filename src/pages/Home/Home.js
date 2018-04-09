// @flow

import React, { PureComponent } from 'react';
import './Home.css';

import SampleContainer from '../../containers/SampleContainer'

class Home extends PureComponent {
  static displayName: string = 'Home';

  render(): React.Element<any> {
    return (
      <div className="Home container">
        Notes App

        <SampleContainer/>
      </div>
    );
  }
}

export default Home;
