import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Todo from './pages/Todo';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Todo } />
      </Switch>
    );
  }
}

export default App;
