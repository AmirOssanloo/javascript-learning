const store0 = require('./store');
const store1 = require('./store');
const store2 = require('./store');

console.log(store0);
console.log(store1);
console.log(store2);


// var CircleGeneratorSingleton = (function() {
//   var instance;

//   function init() {
//     var store = ('I am the store:');

//     return {
//       store: store
//     };
//   }

//   return {
//     getInstance: function() {
//       if (!instance) {
//         instance = init();
//       }

//       return instance;
//     }
//   }
// })();

// var store = CircleGeneratorSingleton.getInstance();