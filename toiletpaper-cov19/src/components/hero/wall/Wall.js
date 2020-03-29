import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import imageCache from '#src/assets';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: 'inherit',
    height: 'inherit',
    minHeight: 'inherit',
    backgroundImage: `url(${imageCache.getSrc('tile_pattern')})`,
    backgroundRepeat: 'repeat'
  },
  vignette: {
    position: 'absolute',
    backgroundColor: 'transparent',
    backgroundImage: `url(${imageCache.getSrc('hero_vignette')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    width: 'inherit',
    height: 'inherit',
    minHeight: 'inherit',
  }
}));

const Wall = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.vignette} />
    </div>
  );
};

export default Wall;
