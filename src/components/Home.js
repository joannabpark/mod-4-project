import React from 'react';
import NoteContainer from './NoteContainer'
import { connect } from 'react-redux';
import { fetchNotesSuccess } from '../actions/notes';
// import 'semantic-ui-css/semantic.min.css'
import { Grid, Container } from 'semantic-ui-react'

class Home extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(notes => {
      this.props.fetchNotesSuccess(notes)
    })
  }

  render() {
  return (
    <div>
       <Container>
        <Grid>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column width={6}><h2>Notes</h2></Grid.Column>
          </Grid.Row>
          <Grid.Row> 
          <Grid.Column width={12}><NoteContainer notes={this.props.notes}/></Grid.Column>
            </Grid.Row>
            </Grid>
      </Container>
     </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    user: state.user
  }
}

const mapDispatchToProps = {
  fetchNotesSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
