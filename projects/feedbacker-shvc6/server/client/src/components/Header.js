import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Link, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    link: {
      margin: theme.spacing(1, 1.5)
    }
  }
});

const Header = ({ auth }) => {
  const classes = useStyles();

  const renderContent = () => {
    switch (auth) {
      case null:
        return null;

      case false:
        return (
          <Button href="/auth/google" className={classes.link} variant="outlined" color="primary">
            Login with Google
          </Button>
        );

      default:
        return (
          <Button href="/api/logout" className={classes.link} variant="outlined" color="primary">
            Logout
          </Button>
        );
    }
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5">
          <Link href="/" color="inherit">Feedbacker</Link>
        </Typography>
        <nav>
          <Link className={classes.link} href="/" variant="button" color="inherit">Something</Link>
          <Link className={classes.link} href="/" variant="button" color="inherit">Something</Link>
          {renderContent()}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Header);