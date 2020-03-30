import PostList from './components/post-list/PostList';
import InfiniteScroll from './components/infinite-scroll/InfiniteScroll';

function init() {
  const headerEl = document.querySelector('#header');
  const mainEl = document.querySelector('#main');
  const postsEl = document.querySelector('#posts');
  const footerEl = document.querySelector('#footer');

  const postList = new PostList(postsEl);
  const infiniteScroll = new InfiniteScroll(mainEl, postsEl, done => {
    postList.createManyPosts(3);
    done();
  });

  window.removeEventListener('DOMContentLoaded', init);
};

window.addEventListener('DOMContentLoaded', init);