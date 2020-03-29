import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Hero from '#components/hero';
// import Content from '#components/content';

import theme from '#styles/theme';
import { ContextProvider } from '#containers/app/AppContext'

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-1721500-14');
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Paper elevation={0}>
          <Hero />
        </Paper>
        {/* <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography variant="h1">Hello</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h1">Hello</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h1">Hello</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h1">Hello</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1">Hello</Typography>
          </Grid>
        </Grid> */}
        {/* <Content /> */}
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
