import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StatsCounter from './StatsCounter';
import StatsLeaderboard from './StatsLeaderboard';
import { useRootContext } from '#containers/app/AppContext';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 'inherit',
    height: '15rem',
    left: 0,
    bottom: 0,
    pointerEvents: 'none'
  }
}));

const StatsSm = () => {
  const classes = useStyles();
  const { userSheetsRolled, globalSheetsRolled, countrySheetsRolled } = useRootContext();

  return (
    <Box className={classes.root}>
      <StatsCounter title="Rolled by the world" counter={globalSheetsRolled} />
      <StatsCounter title="Rolled by you" counter={userSheetsRolled} />
    </Box>
  );
};

export default StatsSm;
