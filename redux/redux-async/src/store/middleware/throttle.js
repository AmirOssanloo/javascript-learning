const delay = () => next => action => {
  const time = action.meta && action.meta.delay;

  if (!time) {
    return next(action);
  }

  setTimeout(() => {
    next(action)
  }, time);
};

export default delay;