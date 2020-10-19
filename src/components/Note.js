import React from 'react'
import { Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notes'

class Note extends React.Component {

    deleteNote = (id) => {
        const reqObj = {
            method: 'DELETE', 
            headers: {
              'Content-Type' : 'application/json'}
          }

        fetch (`http://localhost:3000/notes/${id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            this.props.deleteNote(id)
        })
    }

    render() {
    const {title, content, id} = this.props.note

    return (
        <div>
         <Container>  
            <h4>{title}</h4>
            <p>{content}</p>
            <Button floated='right, top' id="button" >View</Button>
            <Button floated='right, top' id="button" >Edit</Button>
            <Button onClick={() => this.deleteNote(id)} floated='right, top' id="button" >Delete</Button>
        </Container>
        </div>
     )
    }
}

const mapStateToProps = (state) => {
    return {
      notes: state.notes
    }
  }
  
  const mapDispatchToProps = {
    deleteNote
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Note)