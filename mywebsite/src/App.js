import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import mainPage from './componets/mainPage';
import myProjects from './componets/projectSection/myProjects';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={mainPage}/>
          <Route exact path='/projects' component={myProjects}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
