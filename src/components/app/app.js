import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      data: []
    };
    this.deleteItem = this.deleteItem.bind(this);
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

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];
      return {
          data: newArr
      }
    });
  }

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
                  <ItemList items={data}/>
                </List>
              </Grid>
              <Grid item xs={8}>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/:number' component={ItemForm}/>
                </Switch>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )
    }
  }
}

const Home = () => {
  return(
    <p>
      Выберите обращение
    </p>
  )
}