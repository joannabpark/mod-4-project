
import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import { loginSuccess } from '../actions/user';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

const Login = (props) => {

  const { handleSubmit, register, errors, setValue } = useForm();

  const onSubmit = (data) => {
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      
      fetch('http://localhost:3000/users/login', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          props.loginSuccess(data)
          props.history.push('/home')
      }
    })
  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group widths='equal'>
                 <input 
                 type="text" 
                 name="username" 
                 placeholder="username"
                 setValue={setValue}
                 ref={register({
                   required: true, minLength: 5, maxLength: 10
                 })}
                  />
                  {errors.username && "username must be 5-10 characters"}
                 <input 
                 type="password" 
                 name="password" 
                 placeholder="password" 
                 setValue={setValue}
                 ref={register({
                  required: true, minLength: 5, maxLength: 8
                })}
                 />
                 {errors.password && "password must be 5-8 characters"}
                <Form.Field control={Button}>Login</Form.Field>            
              </Form.Group>
           </Form>
      </Container>
    </div>
  );
}


const mapDispatchToProps = {
  loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)
