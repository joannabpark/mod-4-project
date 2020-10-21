import React from 'react'
import { Input, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'


class NavBar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

  return (
    <Menu>
       <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link} 
          to='/home'
          >Home
        </Menu.Item>
        <Menu.Item
           name='newnote'
           active={activeItem === 'newnote'}
          onClick={this.handleItemClick}
           as={Link} 
           to='/newnote'
            >New Note
        </Menu.Item>
        <Menu.Menu position='right'>
          {/* <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item> */}
        <Menu.Item position='right'
         name='login'
         active={activeItem === 'logout'}
            onClick={this.handleItemClick}
         as={Link} 
         to='/login'
          >Logout
       </Menu.Item>
       </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;