// @flow

import React from 'react';
import type { Element, Node } from 'react';
import './App.css';

type PropsType = {
  children?: Node
};

function App(props: PropsType): Element<any> {
  return (
    <div className="App container-fluid">
      {props.children}
    </div>
  );
}

export default App;
