import React, { Component } from 'react';
import { Grid, Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';

export default class ItemForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <form className="form">
        <div className="form__field">
          <FormControl fullWidth>
            <InputLabel id="user">Потребитель</InputLabel>
            <Select
              labelId="user"
              id="select1"
              value=''
            >
              <MenuItem value={10}>Потребитель 1</MenuItem>
              <MenuItem value={20}>Потребитель 2</MenuItem>
              <MenuItem value={30}>Потребитель 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form__field">
          <FormControl fullWidth>
            <InputLabel id="category">Категория</InputLabel>
            <Select
              labelId="category"
              id="select2"
              value=''
            >
              <MenuItem value={10}>Категория 1</MenuItem>
              <MenuItem value={20}>Категория 2</MenuItem>
              <MenuItem value={30}>Категория 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form__field">
          <FormControl fullWidth>
            <InputLabel id="type">Тип обращения</InputLabel>
            <Select
              labelId="type"
              id="select3"
              value=''
            >
              <MenuItem value={10}>Тип 1</MenuItem>
              <MenuItem value={20}>Тип 2</MenuItem>
              <MenuItem value={30}>Тип 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form__field">
          <FormControl fullWidth>
            <TextField
              id="textarea"
              placeholder="Текст обращения"
              multiline
              rows={4}
              variant="outlined"
            />
          </FormControl>
        </div>
        <div className="form__field">
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Button variant="contained" color="primary">
              Завершить
            </Button>
          </Grid>
        </div>
      </form>
    )
  }
}