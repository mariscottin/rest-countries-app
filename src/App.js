import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';

import './App.css';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  }

  return (
    <Router>
      <div className={mode === 'light' ? 'light-mode' : 'dark-mode'}>
        <Navigation toggleMode={toggleMode} mode={mode}/>
        <Switch>
          <Route path="/" exact>
            <Home mode={mode}/>
          </Route>
          <Route path="/detail/:code" exact>
            <Detail mode={mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
