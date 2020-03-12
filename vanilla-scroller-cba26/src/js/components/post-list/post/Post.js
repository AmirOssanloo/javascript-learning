import { random } from '../../../helpers/math';

function Post(id) {
  this.id = 200;

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

  this.img = new Image();
  this.main.appendChild(this.img);

  this.createPostImage();

  return this.container;
};

Post.prototype.createPostImage = async function() {
  const objectURL = await this.fetchPostObjectURL();
  this.img.src = objectURL;
};

Post.prototype.fetchPostObjectURL = function () {
  const self = this;
  const id = this.id;

  const result = fetch(`https://picsum.photos/id/${id}/400/430`)
    .then(res => handleErrors(res))
    .then(res => res.blob())
    .then(res => window.URL.createObjectURL(res))
    .catch(err => console.error(err));

  function handleErrors(res) {
    if (res.status === 404) {
      fetchNewRandomImage();
      return Promise.reject(`Resource at ID ${id} could not be found.`);
    }

    return res;
  };

  function fetchNewRandomImage() {
    self.id = random(0, 1000, true);
    self.createPostImage();
  };

  return result;
};

export default Post;