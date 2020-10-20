import React, { Component } from 'react';
import { Box, Container, Grid, List, CircularProgress } from '@material-ui/core';

import Header from '../header';
import ItemForm from '../itemForm';
import ItemList from '../itemList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      isFormOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/charry-wallaby/test-api/appears")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleClick() {
    this.setState(state => ({
      isFormOpen: !state.isFormOpen
    }));
  };

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <Box>
              Ошибка: {error.message}
            </Box>;
    } else if (!isLoaded) {
      return <Box>
              <CircularProgress />
            </Box>;
    } else {
      return (
        <Box>
          <Container maxWidth="lg">
            <Header/>
            <Grid container spacing={3} >
              <Grid item xs={4}>
                <List>
                  <ItemList items={data} onFormOpen={this.handleClick}/>
                </List>
              </Grid>
              <Grid item xs={8}>
                {
                  this.state.isFormOpen 
                  ? <ItemForm/> 
                  : <Grid container direction="row" justify="center" alignItems="center">
                      Выберите обращение
                    </Grid>
                }
              </Grid>
            </Grid>
          </Container>
        </Box>
      )
    }
  }
}