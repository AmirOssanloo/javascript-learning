const isValidString = str => {
  let regexp = new RegExp(/^([0-9]|[a-z])+([0-9a-z]+)$/).exec(str)
  return typeof str === 'string' && str.trim().length > 0 && regexp !== null;
};

export {isValidString};