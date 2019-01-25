const isValidString = str => {
  return typeof str === 'string' && str.trim().length > 0;
};

const isValidIdentifier = str => {
  let regexp = new RegExp(/^([0-9]|[A-Z]|[a-z])+([0-9a-z]+)$/).exec(str)
  return typeof str === 'string' && str.trim().length > 0 && regexp !== null;
}

export {isValidIdentifier, isValidString};