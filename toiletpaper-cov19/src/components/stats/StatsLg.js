import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StatsCounter from './StatsCounter';
import StatsLeaderboard from './StatsLeaderboard';
import { useRootContext } from '#containers/app/AppContext';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: 'inherit',
    height: 'inherit',
    minHeight: 'inherit',
    left: 0,
    top: 0,
    pointerEvents: 'none'
  },
  gridContainer: {
    display: 'flex',
    width: 'inherit',
    height: 'inherit',
    padding: '0 3rem'
  },
  gridItemSpacing: {
    width: '55rem'
  },
  gridItemCounter: {
    flexGrow: '1',
  },
  gridItemCounterInner: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '22rem',
  },
  gridItemLeaderboard: {
    flexGrow: '1',
  },
  gridItemLeaderboardInner: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '22rem',
  }
}));

const StatsLg = () => {
  const classes = useStyles();
  const { userSheetsRolled, globalSheetsRolled, countrySheetsRolled } = useRootContext();

  return (
    <Box className={classes.root}>
      <div className={classes.gridContainer}>
        <div className={classes.gridItemCounter}>
          <div className={classes.gridItemCounterInner}>
            <div>
              <StatsCounter title="Rolled by the world" counter={globalSheetsRolled} />
              <StatsCounter title="Rolled by you" counter={userSheetsRolled} />
            </div>
          </div>
        </div>
        <div className={classes.gridItemSpacing}></div>
        <div className={classes.gridItemLeaderboard}>
          <div className={classes.gridItemLeaderboardInner}>
            <div>
              <StatsLeaderboard title="Country leaderboard" entries={countrySheetsRolled} />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default StatsLg;
