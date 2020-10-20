import React, { Component } from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { number, onFormOpen } = this.props;
      return (
        <>
          <ListItem button onClick={onFormOpen}>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Обращение" secondary={number} />
          </ListItem>
          <Divider />
        </>
      )
  }
}