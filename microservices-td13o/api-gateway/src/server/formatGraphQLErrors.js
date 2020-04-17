import _ from 'lodash';

const formatGraphQLErrors = err => {
  const errorDetails = _.get(err, 'originalError.response.body');

  try {
    if (errorDetails) {
      return JSON.parse(errorDetails);
    }
  } catch (err) {}

  return err;
};

export default formatGraphQLErrors;
