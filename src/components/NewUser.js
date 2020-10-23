import React from 'react';
import { Grid, Container, Button, Form } from "semantic-ui-react";
import { createUserSuccess } from "../actions/user";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";


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
      console.log(data)
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
              <br></br>
            <Grid>
              <Grid.Row centered>
                 <Grid.Column width={8}>
                   <Form onSubmit={this.handleSubmit}>
                     <Form.Input
                        icon='user'
                        iconPosition='left'
                          placeholder="username"
                          name="username"
                           onChange={this.handleChange}
                            value={this.state.username}
                           />
                       <Form.Input
                        icon='lock'
                        iconPosition='left'
                        placeholder="password"
                         name="password"
                         type="password"
                        onChange={this.handleChange}
                         value={this.state.password}
                        />
                  <div style={{textAlign: "center"}}>
                  <Button type="submit">Create Account</Button>
                  </div>
               </Form>
           </Grid.Column>
      </Grid.Row>
  </Grid>
</Container>
        )
    }

 }

 const mapDispatchToProps = {
   createUserSuccess,
  };
  
  export default connect(null, mapDispatchToProps)(NewUser);