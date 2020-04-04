import React from 'react';
import sortBy from 'lodash/sortBy';
import { Box, Typography } from '@material-ui/core';
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
    fontSize: '1.8rem',
    padding: '0 2rem'
  }
}));

const StatsLeaderboard = ({ title, entries }) => {
  const classes = useStyles();
  const sortedEntries = sortBy(entries, 'count').reverse();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} component="h1" variant="h3">{title}</Typography>
      {sortedEntries.map(entry => {
        const { name, count } = entry;

        return (
          <div key={name} className={classes.entryContainer}>
            <Typography className={classes.entryItem} component="span" variant="body1">{name}</Typography>
            <Typography className={classes.entryItem} component="span" variant="body1">{count}</Typography>
          </div>
        );
      })}
    </Box>
  );
};

export default StatsLeaderboard;
