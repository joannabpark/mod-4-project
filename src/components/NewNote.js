import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { postNoteSuccess } from '../actions/notes'
import { RHFInput } from 'react-hook-form-input'

const NewNote = (props) => {

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          user_id: 1
        })
      }
      
      fetch('http://localhost:3000/notes', reqObj)
      .then(resp => resp.json())
      .then(data => {
          props.postNoteSuccess(data)
          props.history.push(`/home`)
      })
  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group></Form.Group>
            <Form.Group widths='equal'>
            <RHFInput
                    as={<Form.Input />}
                 type="text" 
                 name="title" 
                 placeholder="title"
                 register={register({ required: true })}
                  error={errors.title && 'Enter a title'}
                  />
                  </Form.Group>
                    <Form.Group widths='equal'>
                  <RHFInput
                    as={<Form.Input />}
                 type="area" 
                 name="content" 
                 placeholder="new note..."
                 register={register({ required: true })}
                  error={errors.content && 'must have content'}
                 />
                 </Form.Group>
                <Form.Field control={Button}>Create Note</Form.Field>
           </Form>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = {
  postNoteSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote)
