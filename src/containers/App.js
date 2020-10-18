import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';


class App extends React.Component {

  state = {
    notes: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(notes => {
      return notes
    })
  }

  render() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  )}
}


export default App