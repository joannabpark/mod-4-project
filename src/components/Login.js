
import React from 'react';
import { Grid, Button, Form, Container } from 'semantic-ui-react';
import { loginSuccess } from '../actions/user';
// import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


class Login extends React.Component {

  state={
    username: 'jpark',
    password: '12345',
    error: null
  }

  handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  // { handleSubmit, register, errors, setValue } = this.useForm();

  handleSubmit = (e) => {
    e.preventDefault()
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      }
      
      fetch('http://localhost:3000/users/login', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          this.setState({
          error: data.error
        })
        } else {
          localStorage.setItem('app_token', data.token)
          this.props.loginSuccess(data.user)
          this.props.history.push('/home')
      }
    })
  }

  render() {

  return (
    <div>
      <Container >
      <Grid>
        <Grid.Row centered>
            <Grid.Column width={6}>
      { this.state.error && <h4 style={{ color: 'red'}}>{this.state.error}</h4> }
        <Form onSubmit={this.handleSubmit}>
          <br></br>
            <Form.Input
                 icon='user'
                 iconPosition='left'
                 type="text" 
                 placeholder="username"
                 name={'username'} onChange={this.handleInputChange} value={this.state.username} 
                  />
                  <Form.Input
                 icon='lock'
                 iconPosition='left'
                 type="password" 
                 name={'password'} onChange={this.handleInputChange} value={this.state.password} 
                 placeholder="password" 
                 />
                 <div style={{textAlign: "center"}}>
                <Button><i aria-hidden="true" className="sign in icon"></i></Button>          
                </div>
                <br></br> <br></br>
                {/* <Form.Field  control={Button}>Login</Form.Field>   */}
                <div style={{textAlign: "center"}}>
                <Button as={Link} to={'/newuser'} >Create Account</Button>          
                </div>
           </Form>
           </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>
    </div>
  );
}
}


const mapDispatchToProps = {
  loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)
