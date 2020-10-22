import React from 'react';
// import NoteContainer from './NoteContainer'
// import Note from './Note'
import { connect } from 'react-redux';
// import 'semantic-ui-css/semantic.min.css'
import { Grid, Container } from 'semantic-ui-react'

class Home extends React.Component {


  render() {
  return (  
    <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    user: state.user
  }
}

const mapDispatchToProps = {
  // fetchNotesSuccess,
  // currentUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
