console.log('Woah');

function sayHi() {
  console.log('Saying hi');
}

export default sayHi;

// let counter = 0;

// const fetchNewPosts = async (amount) => {
//   const promises = [];

//   for (var i = 0; i < amount; i++) {
//     const promise = new Promise((resolve, reject) => {
//       const id = randomRange(0, 1000);
//       const request = new XMLHttpRequest();
//       request.responseType = 'blob';
//       request.open('GET', `https://picsum.photos/id/${id}/300/400`);
//       request.send();

//       request.onload = () => {
//         if (request.status === 200) {
//           resolve(request.response);
//         } else {
//           console.log(`There was a problem with the request: ${request.statusText}`);
//         }
//       };

//       request.onerror = () => {
//         reject(new Error('There was a network error.'));
//       };
//     });

//     promises.push(promise);
//   }

//   const results = await Promise.all(promises);
//   return results;
// }

// const randomRange = (min, max) => {
//   return Math.floor((Math.random() * max) + min);
// }