import React from 'react';
import Note from './Note';
import { connect } from 'react-redux'
import { fetchNotesSuccess } from '../actions/notes';
import {currentUser} from '../actions/user'
// import { filterByName } from '../actions/notes'

class NoteContainer extends React.Component {


  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  
  componentDidMount(){

    const token = localStorage.getItem('app_token')
    console.log(token)
    if (!token){
      this.props.history.push('/login')
    } else {

      const reqObj = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },

      }

      fetch('http://localhost:3000/current_user', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.user) {
          this.props.currentUser(data.user)
          fetch('http://localhost:3000/notes')
          .then(resp => resp.json())
          .then(notes => {
            this.props.fetchNotesSuccess(notes)
          })
        }
        console.log('data', data)
      })
    }
  }


    renderNotes = () => {
      return this.props.notes.map((note, index) => (
        <Note key={index} note={note} />
          ))
        }

    render () {
        return (
          <div className="App">
          <section className='section'>
              <div className='container'>
                  <div>
                      <div className="field is-grouped" style={{alignItems: "center"}}>
                          <div className="control">
                              <div className="select">
                                  <select>
                                      <option value="" disabled selected>Sort by</option>
                                      <option>Newest</option>
                                      <option>Oldest</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='tile is-ancestor' style={{flexWrap: "wrap"}}>
                      {
                          // this.props.state.products && this.props.state.products.map(product => (
                              <div className='tile is-parent is-3'>
                                  <div className='tile is-child box'>
                                   {this.renderNotes()}
                                   </div>
                                   </div>
                              //  ))
                           }
                       </div>
                   </div>
               </section>
           </div>
 
        )
    }
  }

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  }
}

const mapDispatchToProps = {
  fetchNotesSuccess,
  currentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)