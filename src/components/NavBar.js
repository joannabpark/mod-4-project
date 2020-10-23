import React from 'react'
import { Button, Input, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import { logoutSuccess } from '../actions/user'
import {connect} from 'react-redux'
import { searchNotes } from '../actions/search'
 

class NavBar extends React.Component {
  state = { activeItem: 'home' }

  handleChange = (e) => {
    e.persist()
    this.props.searchNotes(e)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = () => {
    this.props.logoutSuccess()
    localStorage.removeItem('app_token')
  }

  start = () => {
    let audio = new Audio("/DipDip_1.wav")
    audio.play()
  }


  render() {
    const { activeItem } = this.state

  return (
    <Menu>
         {/* <Menu.Item
          name='icon'
          active={activeItem === 'icon'}
          ><i aria-hidden="true" className="clipboard list icon"></i>
        </Menu.Item> */}
       <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link} 
          to='/home'
          ><i aria-hidden="true" className="home icon"></i>home
        </Menu.Item>
        <Menu.Item
           name='newnote'
           active={activeItem === 'newnote'}
           onClick={this.handleItemClick}
           as={Link} 
           to='/newnote'
            ><i aria-hidden="true" className="plus icon"></i>new note
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input onChange={this.handleChange} icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item position='right'>
              {
                this.props.user.id
                ?
                <Link to='/login' className="ui button" onClick={this.handleLogout} >
                <i aria-hidden="true" className="sign out icon"></i>Logout
                </Link>
                : 
                <Button animated='fade' onClick={this.start} as={Link} to='/thankyou'>
                   <Button.Content visible><i aria-hidden="true" className="jenkins icon"></i></Button.Content>
                    <Button.Content hidden style={{ color: 'hotpink'}}>Boo!</Button.Content>
              </Button>    
              }
          </Menu.Item>
       </Menu.Menu>
    </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    search: state.search
  }
}

const mapDispatchToProps = {
  logoutSuccess,
  searchNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)