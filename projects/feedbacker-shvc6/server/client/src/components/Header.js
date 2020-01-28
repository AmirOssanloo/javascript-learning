import React from 'react';
import { AppBar, Toolbar, Link, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    link: {
      margin: theme.spacing(1, 1.5)
    }
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar color="default" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5">
          <Link href="/" color="inherit">Feedbacker</Link>
        </Typography>
        <nav>
          <Link className={classes.link} href="/" variant="button" color="inherit">Something</Link>
          <Link className={classes.link} href="/" variant="button" color="inherit">Something</Link>
          <Button className={classes.link} variant="outlined" color="primary">Login with Google</Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;