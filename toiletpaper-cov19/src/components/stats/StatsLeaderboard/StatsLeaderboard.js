import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '26rem',
    marginBottom: '3rem',
    textAlign: 'center'
  },
  title: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    marginBottom: '0.8rem',
    padding: '0.5rem 0',
    textTransform: 'uppercase'
  },
  entryContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  entryItem: {
    fontSize: '2.2rem',
    padding: '0 2rem'
  }
}));

const StatsLeaderboard = ({ title, entries }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} component="h1" variant="h3">{title}</Typography>
      {entries.map(entry => {
        const { country, count } = entry;

        return (
          <div key={country} className={classes.entryContainer}>
            <Typography className={classes.entryItem} component="span" variant="body1">{country}</Typography>
            <Typography className={classes.entryItem} component="span" variant="body1">{count}</Typography>
          </div>
        );
      })}
    </Box>
  );
};

export default StatsLeaderboard;
