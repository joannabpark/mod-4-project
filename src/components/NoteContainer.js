import React from 'react';
import Note from './Note';
import { connect } from 'react-redux'

class NoteContainer extends React.Component {

    renderNotes = () => {
        return this.props.notes.map(note => {
             return <Note note={note}/>
        })
      }

    render () {
        return (
          <div>
            {this.renderNotes()}
          </div>
        )
      }

}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, null)(NoteContainer)