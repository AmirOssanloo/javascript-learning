import React, { createRef, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RollCanvas from './roll-canvas';
import imageCache from '#src/assets';
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
  const { hasInteracted, onIncrementUserSheet, onSetHasInteracted } = useRootContext();

  useEffect(() => {
    const roll = new RollCanvas(rollCanvasRef.current, onIncrementUserSheet, onSetHasInteracted);
  }, []);

  return (
    <Box className={classes.root}>
      <img className={classes.rollHolder} src={imageCache.getSrc('roll_holder')} />
      <canvas className={classes.rollCanvas} ref={rollCanvasRef}></canvas>
    </Box>
  );
};

export default Roll;
