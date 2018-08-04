import React from "react";
import ReactDOM from "react-dom";
import BasicExample from './react-router/test'
const Index = () => {
  return ( 
    <div>
      <p> Hello React! </p>
      <BasicExample/>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));