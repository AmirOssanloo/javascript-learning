import React, { createRef, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import db from '#database/db';
import imageCache from '#src/assets';
import RollCanvas from './roll-canvas';
// import Instructions from './instructions';
import { useRootContext } from '#containers/app/AppContext';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '46rem',
    height: 'inherit',
    textAlign: 'center',
    left: '50%',
    transform: 'translate(-50%, 0)'
  },
  rollHolder: {
    width: '412px',
    height: '134px',
    marginTop: '2rem'
  },
  rollCanvas: {
    position: 'absolute',
    margin: '0 auto',
    top: 0,
    left: 0,
    right: 0
  }
}));

const Roll = () => {
  const classes = useStyles();
  const rollCanvasRef = createRef();
  const {
    hasInteracted,
    userCountry,
    userSheetsRolled,
    setHasInteracted,
    setUserSheetsRolled,
  } = useRootContext();

  useEffect(() => {
    onIncrementGlobalSheet();
    onIncrementCountrySheet(userCountry);
  }, [userSheetsRolled]);

  const onIncrementSheet = () => {
    onIncrementUserSheet();
  };

  const onIncrementUserSheet = () => {
    setUserSheetsRolled(prevState => prevState + 1);
  };

  const onIncrementGlobalSheet = () => {
    db.ref('/').transaction(snapshot => {
      if (snapshot) {
        return {
          ...snapshot,
          globalSheetsRolled: snapshot.globalSheetsRolled + 1
        };
      }
    }, null, true);
  };

  const onIncrementCountrySheet = country => {
    if (isEmpty(country)) return;

    db.ref('/countrySheetsRolled/').transaction(snapshot => {
      if (snapshot) {
        const { id, name } = country;
        let count = 0;

        if (snapshot[id]) {
          count = snapshot[id].count;
        }

        return { ...snapshot, [id]: { name, count: count + 1 } };
      }
    }, null, true);
  };

  useEffect(() => {
    const roll = new RollCanvas(rollCanvasRef.current, onIncrementSheet, setHasInteracted);
  }, []);

  return (
    <Box className={classes.root}>
      <img className={classes.rollHolder} src={imageCache.getSrc('roll_holder')} />
      <canvas className={classes.rollCanvas} ref={rollCanvasRef}></canvas>
    </Box>
  );
};

export default Roll;
