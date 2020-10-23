import React from 'react';
import Note from './Note';
import { connect } from 'react-redux'
import { fetchNotesSuccess } from '../actions/notes';
import { currentUser } from '../actions/user'

class NoteContainer extends React.Component {

  componentDidMount(){
   
    const token = localStorage.getItem('app_token')
    // console.log(token)
    if (!token){
      this.props.history.push('/login')
    } else {

      const reqObj = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }
      fetch('http://localhost:3000/current_session', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.user) {
          this.props.currentUser(data.user)
          fetch('http://localhost:3000/notes')
          .then(resp => resp.json())
          .then(notes => {
            let newNotes = notes.filter(note => note.user_id === data.user.id)
            this.props.fetchNotesSuccess(newNotes)
          })
        }
      })
    }
  }

    renderNotes = () => {
      let notesList = this.props.notes.filter(notes => notes.title.toLowerCase().includes(this.props.search.toLowerCase()))
      return notesList.map((note, index) => (
        <Note key={index} note={note} history={this.props.history} />
          ))
        }

    render () {
        return (
            <div className='App'>
               {/* <div>
                 <select >
                    <option value="" disabled selected>Sort by</option>
                     <option >Newest</option>
                     <option >Oldest</option>
                    </select>
                 </div> */}
                 <br></br>
                   {this.renderNotes()}
                 <br></br>
            </div>
        )
      }
  }

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    search: state.search
  }
}

const mapDispatchToProps = {
  fetchNotesSuccess,
  currentUser,
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)