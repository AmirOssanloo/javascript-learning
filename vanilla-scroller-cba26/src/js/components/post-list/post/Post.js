import { random } from '../../../helpers/math';

function Post(id) {
  this.id = id;
  this.fetchImageAttempts = 0;
  this.fetchImageMaxAttemps = 3;

  this.container = document.createElement('div');
  this.container.className = 'post';

  this.header = document.createElement('div');
  this.header.className = 'post__header';
  this.container.appendChild(this.header);

  this.main = document.createElement('div');
  this.main.className = 'post__main';
  this.container.appendChild(this.main);

  this.footer = document.createElement('div');
  this.footer.className = 'post__footer';
  this.container.appendChild(this.footer);

  this.createPostImage();

  return this.container;
};

Post.prototype.createPostImage = async function() {
  const response = await this.fetchPostImage();
  console.log(response);

  const blobURL = window.URL.createObjectURL(response);
  const img = new Image();
  img.src = blobURL;
  this.main.appendChild(img);
}

Post.prototype.fetchPostImage = function () {
  const id = this.id;

  const result = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.responseType = 'blob';
    request.open('GET', `https://picsum.photos/id/${id}/400/430`);
    request.send();

    request.onload = () => {
      const { status, response, statusText } = request;

      if (status === 200) {
        resolve(response);
        console.log('Image success');
      } else if (status === 404) {
        console.log('----------------');
        console.log(this.id);
        this.id = random(0, 1000, true);
        this.createPostImage();
        console.log(`404 trying another image: ${this.id}`);
      } else {
        if (this.fetchImageAttempts < this.fetchImageMaxAttemps) {
          this.fetchPostImage();
          this.fetchImageAttempts += 1;
          console.log('Retrying to fetch image');
        } else {
          console.error(`There was a problem with the request: ${statusText}`);
        }
      }
    }

    request.onerror = () => {
      reject(new Error('There was a network error'));
    }
  });

  return result;
};

export default Post;

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