const isValidString = str => {
  return typeof str === 'string' && str.trim().length > 0;
};

export {isValidString};