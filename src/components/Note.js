import React from 'react'
import { Link } from "react-router-dom";
import { Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notes'

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

    fetchNote = (id) => {
      fetch (`http://localhost:3000/notes/${id}`)
      .then(resp => resp.json())
      .then(note => {
        console.log(note)
        this.props.fetchNote(note)
      })
    }

    render() {

    const {title, content, id} = this.props.note

    return (
        <div className="ui item">
         <Container className='ui container'>  
            <h4 className="ui dividing header">{title}</h4>
            <p>{content.slice(0, 25)}...</p>
              <Button as={Link} to={`/home/${id}`}  floated='right, top' className="ui button" >View</Button>
            <Button as={Link} to={`/home/edit/${id}`} floated='right, top' className="ui button" >Edit</Button>
            <Button onClick={() => this.deleteNote(id)} floated='right, top' className="ui button" >Delete</Button>
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