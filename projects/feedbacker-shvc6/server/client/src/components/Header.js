import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Link, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Payments from './Payments';

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
          <React.Fragment>
            <Link
              to="/"
              component={RouterLink}
              className={classes.link}
              variant="button"
              color="inherit">
              Link
            </Link>
            <Link
              to="/"
              component={RouterLink}
              href="/"
              className={classes.link}
              variant="button"
              color="inherit">
              Link
            </Link>
            <Payments />
            <Button href="/api/logout" className={classes.link} variant="outlined" color="primary">
              Logout
            </Button>
          </React.Fragment>
        );
    }
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5">
          <Link
            component={RouterLink}
            to={auth ? "/surveys" : "/"}
            color="inherit">
            Feedbacker
          </Link>
        </Typography>
        <nav>
          {renderContent()}
        </nav>
      </Toolbar>
    </AppBar >
  );
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Header);