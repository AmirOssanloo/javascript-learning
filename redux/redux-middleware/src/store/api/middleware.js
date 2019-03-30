// import apiEvents from './events';

// const fetchStart = ({ dispatch }) => next => action => {
//   if (action.type === apiEvents.FETCH_START) {
//     const { url, method, headers, onSuccess, onError } = action.meta;
//     const body = JSON.stringify(action.payload);
    
//     return fetch(url, { method, headers, body })
//       .then(res => res.json())
//       .then(res => dispatch({ type: onSuccess, payload: res }))
//       .catch(err => dispatch({ type: onError, payload: err }))
//       .then(() => dispatch({ type: apiEvents.FETCH_END }))
//   }

//   next(action);
// };

// export default [
//   fetchStart
// ];