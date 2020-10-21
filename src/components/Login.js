
import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
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
          this.props.loginSuccess(data)
          this.props.history.push('/home')
      }
    })
  }

  render() {

  return (
    <div>
      <Container>
      { this.state.error && <h4 style={{ color: 'red'}}>{this.state.error}</h4> }
        <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
                 <input 
                 type="text" 
                //  name="username" 
                 placeholder="username"
                 name={'username'} onChange={this.handleInputChange} value={this.state.username} 
                //  setValue={setValue}
                //  ref={register({
                //    required: true, minLength: 5, maxLength: 10
                //  })}
                  />
                  {/* {errors.username && "username must be 5-10 characters"} */}
                 <input 
                 type="password" 
                //  name="password" 
                 name={'password'} onChange={this.handleInputChange} value={this.state.password} 
                 placeholder="password" 
                //  setValue={setValue}
                //  ref={register({
                //   required: true, minLength: 5, maxLength: 8
                // })}
                 />
                 {/* {errors.password && "password must be 5-8 characters"} */}
                <Form.Field control={Button}>Login</Form.Field>  
                <Button as={Link} to={'/newuser'} >Create Account</Button>          
              </Form.Group>
           </Form>
      </Container>
    </div>
  );
}
}


const mapDispatchToProps = {
  loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)
