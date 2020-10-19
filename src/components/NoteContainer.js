import React from 'react';
import Note from './Note';

class NoteContainer extends React.Component {

    renderNotes = () => {
        return this.props.notes.map(note => {
             return <Note key={note.id} note={note}/>
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

export default NoteContainer;