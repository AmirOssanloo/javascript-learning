import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      Dashboard
      <Fab
        className={classes.fab}
        component={RouterLink}
        to={"/surveys/new"}
        color="primary"
        aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Dashboard;