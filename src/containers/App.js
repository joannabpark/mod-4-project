import React from 'react';
import './App.css'
import {
 BrowserRouter, Route, Switch
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import EditNote from '../components/EditNote';
import Login from '../components/Login';
import NewNote from '../components/NewNote';
import ErrorPage from '../components/ErrorPage';
import ShowNote from '../components/ShowNote';
import NewUser from '../components/NewUser'
import NoteContainer from '../components/NoteContainer'

class App extends React.Component {

  render() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/home" component={NoteContainer} />
          <Route exact path="/home/edit/:id" component={EditNote} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/newnote" component={NewNote} />
          <Route exact path="/home/:id" component={ShowNote} />
          <Route exact path="/newuser" component={NewUser} />
          <Route exact path="/" component={Login} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>     
      </BrowserRouter>
  )}
}


export default App