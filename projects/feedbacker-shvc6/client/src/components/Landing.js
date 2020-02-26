import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    }
  }
});

const Landing = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Pricing
      </Typography>
    </Container>
  );
};

export default Landing;