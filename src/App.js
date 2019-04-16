import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import routes from './routes.js'

const App = (props) => {
  return (
    <div className="App">
      <Router>
        {routes}
      </Router>
    </div>
  );

}

export default App;
