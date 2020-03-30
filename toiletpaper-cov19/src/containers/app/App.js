import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Hero from '#components/hero';
import theme from '#styles/theme';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-1721500-14');
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const { country_name } = data;
        setUserCountry(country_name);
      });
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
        <Hero />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
