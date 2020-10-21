import React from 'react'
import { Link } from "react-router-dom";
import { Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notes'
// import NoteItem from './NoteItem';

class Note extends React.Component {

    deleteNote = (id) => {
        const reqObj = {
            method: 'DELETE', 
          }

        fetch (`http://localhost:3000/notes/${id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            this.props.deleteNote(id)
        })
    }

    render() {
    return (
        <div className="ui item">
         <Container className='ui container'>  
            <h4 className="ui dividing header">{this.props.note.title}</h4>
            <p>{this.props.note.content}</p>
              <Button as={Link} to={`/home/${this.props.note.id}`}  floated='right, top' className="ui button" >View</Button>
            <Button as={Link} to={`/home/edit/${this.props.note.id}`} floated='right, top' className="ui button" >Edit</Button>
            <Button onClick={() => this.deleteNote(this.props.note.id)} floated='right, top' className="ui button" >Delete</Button>
        </Container>
        
        </div>
     )
    }
}

// const mapStateToProps = (state) => {
//     return {
//       notes: state.notes
//     }
//   }
  
  const mapDispatchToProps = {
    deleteNote
  }
  
  export default connect(null, mapDispatchToProps)(Note)