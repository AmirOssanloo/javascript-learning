import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../store/actions';

const useStyles = makeStyles(theme => {
  return {
    link: {
      margin: theme.spacing(1, 1.5),
      cursor: 'pointer'
    }
  }
});

const Payments = ({ handleStripeToken }) => {
  const classes = useStyles();

  return (
    <StripeCheckout
      name="Feedbacker"
      description="$5 for 5 emails"
      amount={500}
      token={token => handleStripeToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}>
      <Link
        to="/"
        className={classes.link}
        variant="button"
        color="inherit">
        Add credits
      </Link>
    </StripeCheckout>
  );
};

export default connect(null, actions)(Payments);