import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Список обращений
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;