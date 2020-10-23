import React from 'react';
import { Checkbox, Grid, Button, Form, Container } from 'semantic-ui-react';
// import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { postNoteSuccess } from '../actions/notes'
// import { RHFInput } from 'react-hook-form-input'

class NewNote extends React.Component {

  state = {
    id: "",
    title: "",
    content: "",
    error: null
  }

  componentDidMount(){

    const token = localStorage.getItem('app_token')
    // console.log(token)
    if (!token){
      this.props.history.push('/login')
    // }
    // if(!this.props.user.id) {
    //   this.props.history.push('/login')
    // } else {
      // const path = this.props.location.pathname.split("/")
        // const id = parseInt(path[path.length - 1])
        // this.setInitialState(id)
    }
  }

  // const { handleSubmit, register, errors } = useForm();

  handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  // handleFavChange = () => {

  // }

  handleSubmit = (e) => {
    e.preventDefault()
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          id: `${this.props.user.id}`
        },
        body: JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                content: this.state.content,
                user_id: this.props.user.id
        })
      }
      
      fetch('http://localhost:3000/notes', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          this.setState({
            error: data.error
          })
        } else {
          this.props.postNoteSuccess(data)
          this.props.history.push(`/home`)
        }
      })
  }

  render() {
  return (
    <div>
      <Container>
        <br></br>
      <Grid>
        <Grid.Row centered>
            <Grid.Column width={8}>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group></Form.Group>
            <Form.Group widths='equal'>
            <input
                    as={<Form.Input />}
                 type="text" 
                 name="title" 
                 onChange={this.handleInputChange}
                 value={this.state.title}
                 placeholder="title"
                //  register={register({ required: true })}
                  // error={errors.title && 'Enter a title'}
                  />
                  </Form.Group>
                  <br></br>
                    <Form.Group widths='equal'>
                  <textarea
                    as={<Form.Input />}
                 type="area" 
                 name="content" 
                 onChange={this.handleInputChange}
                 value={this.state.content}
                 placeholder="new note..."
                //  register={register({ required: true })}
                  // error={errors.content && 'must have content'}
                 />
                 </Form.Group>
                 <br></br>
                 <Checkbox onChange={this.handleFavChange} label='favorite' />
                 <br></br><br></br>
                 <div style={{textAlign: "center"}}>
                 <Button animated='fade'>
                   <Button.Content visible><i aria-hidden="true" className="plus square outline icon"></i></Button.Content>
                    <Button.Content hidden style={{ color: 'hotpink'}}>create</Button.Content>
              </Button>
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

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    user: state.user
  }
}

const mapDispatchToProps = {
  postNoteSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote)
