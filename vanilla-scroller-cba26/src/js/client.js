import sayHi from './server';

sayHi();

console.log('Hello');

// window.addEventListener('DOMContentLoaded', init);

// function init() {
//   const container = document.querySelector('#app-root')
//   const postsPerRequest = 3;
//   let isFetching = false;

//   async function createNewPosts() {
//     const response = await fetchNewPosts(postsPerRequest);

//     response.forEach(blob => {
//       const blobURL = window.URL.createObjectURL(blob);
//       console.log(blobURL)
//       createPostFromBlob(blobURL);  
//     });
    
//     isFetching = false;
//   }

//   function createPostFromBlob(blob) {
//     const img = new Image();
//     img.src = blob;

//     const div = document.createElement('div');
//     div.className = 'post';

//     div.appendChild(img);
//     container.appendChild(div);
//   };

//   function onScroll(e) {
//     const shouldFetchPosts = window.scrollY + window.innerHeight >= document.body.offsetHeight;

//     if (isFetching) {
//       return;
//     }

//     if (shouldFetchPosts) {
//       isFetching = true;
//       createNewPosts();
//     }
//   };

//   // Initiate
//   createNewPosts();

//   // Listeners
//   document.addEventListener('scroll', onScroll);
//   window.removeEventListener('DOMContentLoaded', init);
// };

