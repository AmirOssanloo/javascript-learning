import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    link: {
      margin: theme.spacing(1, 1.5),
      cursor: 'pointer'
    }
  }
});


const Payments = () => {
  const classes = useStyles();

  return (
    <StripeCheckout
      name="Feedbacker"
      description="$5 for 5 emails"
      amount={500}
      token={token => { console.log(token); }}
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

export default Payments;