import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Hero from '#components/hero';
import theme from '#styles/theme';
import { useRootContext } from '#containers/app/AppContext';

const App = () => {
  const { onSetUserCountry } = useRootContext();

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const { country_name } = data;
        onSetUserCountry(country_name);
      });
  }, []);

  useEffect(() => {
    ReactGA.initialize('UA-1721500-14');
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
        <Hero />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
