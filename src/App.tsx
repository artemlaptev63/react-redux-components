import * as React from 'react';
import './App.scss';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import StyleGuide from './style-guide/StyleGuide';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Redirect exact from="/" to="/login"/>
            <Route exact component={LoginForm} path="/login" />
          </Switch>
          <Route exact component={StyleGuide} path="/styling" />
        </div>
      </HashRouter>
    );
  }
}


export default App;
