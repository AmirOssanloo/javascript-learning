import Post from './post/Post';
import { random } from '../../helpers/math';

function PostList(element) {
  this.element = element;
  this.createManyPosts(3);
};

PostList.prototype.createManyPosts = function(amount) {
  for (var i = 0; i < amount; i++) {
    this.createSinglePost();
  }
};

PostList.prototype.createSinglePost = function() {
  const id = random(0, 1000, true);
  const post = new Post(id);
  this.element.appendChild(post);
};

export default PostList;