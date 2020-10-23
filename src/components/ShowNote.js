import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { deleteNote } from '../actions/notes'
import moment from 'moment';
import { Container, Button } from 'semantic-ui-react'
// import ContactUs from '../containers/ContactUs'

class ShowNote extends React.Component {
   
    state ={
        note: ''
    }

    renderNote = () => {
    return (
        <Container>
            <br></br>
        <div className="ui centered card">
        <div className="content">
            <div className="header">{this.state.note.title}</div>
            <div class="meta">updated {moment(this.state.note.updated_at).fromNow()}</div>
            <div className="description">{this.state.note.content}</div>
        </div>
        <div className="ui bottom attached button" >
        <Button as={Link} to={`/home/${this.state.note.id}/form`}><i className="mail icon" ></i></Button>
        <Button as={Link} to={`/home/edit/${this.state.note.id}`}><i className="edit icon" ></i></Button>
            <Button onClick={() => this.deleteNote(this.state.note.id)}><i className="delete icon" ></i></Button>
        </div>
        </div>
        </Container>
    )
}
componentDidMount() {
    const token = localStorage.getItem('app_token')

    if (!token){
      this.props.history.push('/login')
    } else {
    const noteId = this.props.match.params.id
    fetch(`http://localhost:3000/notes/${noteId}`)
    .then(resp => resp.json())
    .then(data => {
        this.renderNote(data)
        this.setState({
            note : data
         })
        })
    }
}

deleteNote = (id) => {
    const reqObj = {
        method: 'DELETE', 
      }

    fetch (`http://localhost:3000/notes/${id}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
        this.props.deleteNote(id)
        this.props.history.push('/home')
    })
}

  render() {
    return (
        <div className="Note">
           {this.renderNote()}
        </div>
    );
  }
};

// const mapStateToProps = (state) =>  {
//     return {
//         note: [state.notes]
//     }
// }

const mapDispatchToProps = {
    deleteNote
  }
export default connect(null, mapDispatchToProps)(ShowNote);