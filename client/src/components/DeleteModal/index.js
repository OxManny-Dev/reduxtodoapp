import React from 'react'
import { Button, Card, Header, Icon, Modal } from 'semantic-ui-react';

const DeleteModal = props => (
  <Modal trigger={ <Button inverted color='red' icon='window close' content='Delete'/>}
         basic size='small'
         open={props.open}
        style={{ width: '450px'}}>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button fluid inverted negative>
        <Icon name='remove'/> Are you sure you want to delete?
      </Button>
    </Modal.Actions>
  </Modal>
)

export default DeleteModal