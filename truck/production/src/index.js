import React from 'react';
import ReactDOM from 'react-dom';
import Truck from 'truck';

const Index = () => {
  return [
      <h1>Simple Site</h1>,
      <Truck/>
  ]
};

ReactDOM.render(<Index />, document.getElementById("root"));
