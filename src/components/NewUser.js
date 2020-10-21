import React from 'react';
import { Container, Button, Form } from "semantic-ui-react";
import { createUserSuccess } from "../actions/user";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class NewUser extends React.Component {
    state = {
      id: "",
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      error: null
    };
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }

    fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(data => {
        if (data.error) {
            this.setState({
              error: data.error
            })
          } else {
            this.props.createUserSuccess(data)
            this.props.history.push(`/home`)
          }
        })
    }


    render() {
        return(
            <Container text>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>username</label>
            <input
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </Form.Field>
          <Form.Field>
            <label>password</label>
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Field>
          <Form.Field>
            <label>first name</label>
            <input
              placeholder="first name"
              name="first_name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          </Form.Field>
          <Form.Field>
            <label>last name</label>
            <input
              placeholder="last name"
              name="last_name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
        )
    }

 }

 const mapDispatchToProps = {
   createUserSuccess,
  };
  
  export default connect(null, mapDispatchToProps)(NewUser);