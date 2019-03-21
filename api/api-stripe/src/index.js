const stripe = require('stripe')(process.env.STRIPE_SECRET);

const createPlan = async () => {
  try {
    const product = await stripe.products.create({
      type: 'service',
      name: 'Test Product'
    });

    const plan = await stripe.plans.create({
      product: product.id,
      nickname: "Test plan USD",
      currency: 'usd',
      interval: 'month',
      amount: 1000
    });

    return plan;
  } catch (err) {
    return err;
  }
}

const createCustomer = async (email) => {
  try {
    const customer = await stripe.customers.create({
      email: email,
      source: 'tok_mastercard_debit_transferSuccess'
    });

    return customer;
  } catch (err) {
    return err;
  }
}

const createSubscription = async () => {
  const subscription = await stripe.subscriptions.create({
    customer: 'cus_EjZGJ1VbXGz4kj',
    items: [{plan: 'plan_EjZG44buYAsRwM'}]
  });
}

const plan = createPlan()
// const customer1 = createCustomer('berry@skyinthesea.com');
// const customer2 = createCustomer('larry@skyinthesea.com');
// const customer3 = createCustomer('terry@skyinthesea.com');

Promise.all([plan, customer1, customer2, customer3])
  .then(res => {
    createSubscription();
  });