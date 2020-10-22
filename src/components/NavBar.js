import React from 'react'
import { Input, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import { logoutSuccess } from '../actions/user'
import {connect} from 'react-redux'


class NavBar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = () => {
    this.props.logoutSuccess()
    localStorage.removeItem('app_token')
  }

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
        <Menu.Item position='right'>
              {
                this.props.user.id
                ?
                <Link to='/login' className="ui button" onClick={this.handleLogout} >
                  Logout
                </Link>
                : 
                <Link to='/login' className="ui button">
                  Login
                </Link>
              }
        {/* //  name='login'
        //  active={activeItem === 'logout'}
        //     onClick={this.handleItemClick}
        //  as={Link} 
        //  to='/login' */}
       </Menu.Item>
       </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)