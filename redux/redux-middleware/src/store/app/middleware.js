const logger = ({dispatch, getState}) => next => action => {
  console.log(`%c Before:`, 'background-color: #555; color: #ccfffa; padding: 3px 4px 3px 0px', getState());
  next(action);
  console.log(`%c Next:`, 'background-color: #555; color: #fcccfc; padding: 3px 4px 3px 0px', getState());
};

export default [
  logger
];