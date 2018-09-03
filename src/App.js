import React, { Component } from 'react';

import Demo1 from './component/demo'
import Demo2 from './component/demo2'

import './App.css';

class App extends Component {
  


  render(){

  
    return(
        <div>
          <h2> Demo 1 </h2>
            < Demo1 />
          <hr/>
          <h2> Demo 2 </h2>
            < Demo2 />
        </div>
    )
  }
}
export default App;
