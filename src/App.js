import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import routes from './routes.js'

import './App.scss'

import Navbar from './Components/Navbar/Navbar'

const App = (props) => {
  return (
    <div id="App-parent">
      <Router>
        <Navbar />
        {routes}
      </Router>
    </div>
  );

}

export default App;
