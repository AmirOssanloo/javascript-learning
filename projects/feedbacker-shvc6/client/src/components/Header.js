import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Badge, Toolbar, Link, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import Payments from './Payments';

const useStyles = makeStyles(theme => {
  return {
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    link: {
      margin: theme.spacing(1, 1.5)
    },
    badge: {
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
          <Button className={classes.link} href="/auth/google" variant="outlined" color="primary">
            Login with Google
          </Button>
        );

      default:
        return (
          <React.Fragment>
            <Payments />
            <Badge className={classes.badge} badgeContent={auth.credits} color="primary">
              <MonetizationOnIcon />
            </Badge>
            <Button className={classes.link} href="/api/logout" variant="outlined" color="primary">
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