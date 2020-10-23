import React from 'react';
import { Grid, Message } from 'semantic-ui-react'

const ThankYou = () => {
  return (
    <Grid>
    <Grid.Row centered>
      <Grid.Column width={6}>
      <br></br>
       <Message>
        <Message.Header>Thanks to:</Message.Header>
        <Message.List>
        <Message.Item>Jeff, for being my pair programming buddy</Message.Item>
        <Message.Item>Raza, for all the times you've rescued me</Message.Item>        
        <Message.Item>Ignas, for showing me your ways</Message.Item>
        <Message.Item>Charlie, for helping me with the show page</Message.Item>
        <Message.Item>Nick, for helping me with the logout button problem</Message.Item>
        <Message.Item>everyone else, for the emotional support</Message.Item>
      </Message.List>
      </Message>
    </Grid.Column>
    </Grid.Row>
  </Grid>
  )
};

export default ThankYou;