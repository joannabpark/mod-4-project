import React from 'react';
import Note from './Note';
import { connect } from 'react-redux'

class NoteContainer extends React.Component {

    renderNotes = () => {
      console.log(this.props.notes)
        return this.props.notes.map(noteObj => {
             return <Note note={noteObj}/>
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