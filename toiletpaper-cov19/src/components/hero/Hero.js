import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wall from './wall';
import Roll from './roll';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minWidth: '37rem',
    minHeight: '58rem',
    overflow: "hidden"
  },
  titleContainer: {
    position: 'relative',
    textAlign: 'center',
    marginBottom: '5rem',
    paddingTop: '2.8rem',

    [theme.breakpoints.down("xs")]: {
      marginBottom: '2rem'
    }
  },
  title: {
    marginBottom: '0.8rem',
    [theme.breakpoints.down("xs")]: {
      fontSize: '3.8rem'
    }
  },
  subtitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: '1.2rem'
    }
  }
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Wall />
      <div className={classes.titleContainer}>
        <Typography className={classes.title} component="h1" variant="h1">Stay home rollin’</Typography>
        <Typography className={classes.subtitle} component="h2" variant="subtitle1">The infinite toilet paper roll for worldwide hoarders</Typography>
      </div>
      <Roll />
    </div>
  );
};

export default Hero;
