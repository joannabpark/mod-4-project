
import React from "react";
import { Grid, Container, Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { editNoteSuccess } from "../actions/notes";

class EditNote extends React.Component {

    state = {
        id: "",
        title: "",
        content: ""
    }

    componentDidMount() {
        const path = this.props.location.pathname.split("/")
        const id = parseInt(path[path.length - 1])
        this.setInitialState(id)
    }

    setInitialState = (id) => {
        fetch(`http://localhost:3000/notes/${id}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({ id: data.id, title: data.title, content: data.content})
        })
      }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const reqObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                content: this.state.content,
                user_id: 1
            })
        }
        fetch(`http://localhost:3000/notes/${this.state.id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            this.props.editNoteSuccess(data)
            this.setState({
                id: this.state.id,
                title: this.state.title,
                content: this.state.content
            })
            this.props.history.push(`/home`)
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
                  <Form.Group widths='equal'>
                       <input
                       as={<Form.Input />}
                       type="text" 
                        name="title" 
                        placeholder="title"
                       value={this.state.title}
                       onChange={this.handleChange}
                      />
                  </Form.Group>
                    <br></br>
                  <Form.Group widths='equal'>
                     <textarea
                      as={<Form.Input />}
                      type="area" 
                      name="content" 
                      placeholder="new note..."
                      value={this.state.content}
                      onChange={this.handleChange}
                     />
                   </Form.Group>
                   <br></br>
                   <div style={{textAlign: "center"}}>
                       <Button>Save</Button>
                  </div>
                </Form>
             </Grid.Column>
          </Grid.Row>
      </Grid>
  </Container>
</div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      notes: state.notes,
    };
  };
  
  const mapDispatchToProps = {
    editNoteSuccess
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditNote);