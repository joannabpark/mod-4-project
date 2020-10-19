import React from 'react';
import './App.css'
import {
  Route, Switch
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Login from '../components/Login';
import NewNote from '../components/NewNote';
import ErrorPage from '../components/ErrorPage';

class App extends React.Component {

  render() {
  return (
      <div className="app">
        <NavBar />
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/newnote" component={NewNote} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={ErrorPage} />
        </Switch>
      </div>     
  )}
}


export default App