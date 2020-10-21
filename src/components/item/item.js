import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { number } = this.props;
      return (
        <Router>
          <Link to={`/:${number}`}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Обращение" secondary={number} />
            </ListItem>
            <Divider />
          </Link>
        </Router>
      )
  }
}