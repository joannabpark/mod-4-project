import React from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notes'
import moment from 'moment';
import { Link } from "react-router-dom";


class Note extends React.Component {


    render() {

    return ( 
      <Link to={`/home/${this.props.note.id}`}>
      <div class="ui centered cards">
      <a class="ui card"  >
        <div class="content">
          <div class="header">{this.props.note.title}</div>
          <div class="meta">created {moment(this.props.note.created_at).fromNow()}</div>
          <div class="description">{this.props.note.content.slice(0,25)}...</div>
          </div>
          </a>
          </div>
          </Link>
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