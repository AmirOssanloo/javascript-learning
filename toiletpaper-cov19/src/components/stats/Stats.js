import React from 'react';
import { Box, Grid } from '@material-ui/core';
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
    height: 'inherit'
  },
  gridItemCounter: {
    flexGrow: '1',
  },
  gridItemCounterInner: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '22rem',
  },
  gridItemSpacing: {
    width: '58rem'
  },
  gridItemLeaderboard: {
    flexGrow: '1',
  },
  gridItemLeaderboardInner: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '22rem',
  },

}));

const Stats = () => {
  const classes = useStyles();
  const { globalSheetsRolled, userSheetsRolled } = useRootContext();

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
              <StatsLeaderboard title="Country leaderboard" entries={[{ country: 'Argentina', count: '8273' }, { country: 'Sweden', count: '6372' }]} />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Stats;
