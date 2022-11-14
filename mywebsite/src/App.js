import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import mainPage from './Components/mainPage';
import myProjects from './Components/projectSection/myProjects';

function App() {
  return (
    <div className="App bg-gradient-to-b from-cyan-50 to-cyan-200">
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
