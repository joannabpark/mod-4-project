import React from 'react';
import emailjs from 'emailjs-com';
import { Container, Grid, Button, Form } from "semantic-ui-react";


class ContactUs extends React.Component {

  state ={
    title: "",
    content: ""
}

renderForm = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
            <Grid.Column width={8}>
             <Form style={{textAlign: "center"}} className="contact-form" onSubmit={this.sendEmail}>
             {/* <input type="hidden" name="contact_number" /> */}
              <Form.Field >
              <label>Name</label>
              <input type="text" name="to_name" />
              </Form.Field>
              <Form.Field id='form-input-control-error-email'>
              <label>Email</label>
              <input type="email" name="to_email" placeholder="name@example.com"/>
             </Form.Field>
              <Form.Field>
              <label>Note Title</label>
               <input as={<Form.Input />} type="text" name="subject" value={this.state.title} />
             </Form.Field>
             <Form.Field>
              <label>Note Content</label>
              <textarea as={<Form.Input />} name="message" value={this.state.content}/>
             </Form.Field>
             <div style={{textAlign: "center"}}>
             <Button animated='fade' type="submit" value="Send">
                    <Button.Content visible><i className="send icon" ></i></Button.Content>
                    <Button.Content hidden style={{ color: 'hotpink'}}>send</Button.Content>
                 </Button>
             </div>
            </Form>
          </Grid.Column>
        </Grid.Row>
    </Grid>
</Container>
  )
}

  componentDidMount() {
  const noteId = this.props.match.params.id
  fetch(`http://localhost:3000/notes/${noteId}`)
  .then(resp => resp.json())
  .then(note => {
      console.log(note)
      this.renderForm(note)
      this.setState({
        title: note.title, content: note.content
        })
       })
      }


  sendEmail = (e) => {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_mmzly6g', 'template_ws79hkf', e.target, 'user_lCgyHlUbKgM3DjHFUJrf6')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }
  
render() {
  return (
      <div>
        {this.renderForm()}
      </div>
    );
  }
}

export default ContactUs