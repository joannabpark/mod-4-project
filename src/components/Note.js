import React from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notes'
import moment from 'moment';
import { Popup, Card } from 'semantic-ui-react'

class Note extends React.Component {

  handleClick = () => {
    this.props.history.push(`/home/${this.props.note.id}`)
  }

    render() {

    return ( 
      <Popup content='view note' trigger={<Card visible centered
        onClick={this.handleClick}
        header={this.props.note.title}
        meta={moment(this.props.note.created_at).fromNow()}
        description={this.props.note.content.slice(0,25)}
        />} />
      )
    }
  }
  
  const mapDispatchToProps = {
    deleteNote
  }
  
  export default connect(null, mapDispatchToProps)(Note)