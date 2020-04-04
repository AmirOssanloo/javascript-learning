import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '26rem',
    marginBottom: '3rem',
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      justifyContent: 'flex-start',
      margin: '1rem 1rem 3rem 1rem'
    }
  },
  title: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: '0.5rem 0',
    textTransform: 'uppercase',

    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
      width: '18rem',
      margin: '0 auto',
      padding: '0.5rem 1rem',
      fontSize: '1.4rem'
    },
  },
  counter: {
    color: '#fff',
    fontSize: '7.8rem',

    [theme.breakpoints.down('sm')]: {
      fontSize: '4.2rem'
    },
  }
}));

const StatsCounter = ({ title, counter }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} component="h1" variant="h3">{title}</Typography>
      <Typography className={classes.counter} component="span" variant="h2">{counter}</Typography>
    </Box>
  );
};

export default StatsCounter;
