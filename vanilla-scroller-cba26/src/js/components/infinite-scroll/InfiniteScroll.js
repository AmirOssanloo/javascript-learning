function InfiniteScroll(container, content, callback) {
  this.container = container;
  this.content = content;
  this.callback = callback;
  this.busy = false;

  this.container.addEventListener('scroll', this.onScroll.bind(this));
};

InfiniteScroll.prototype.onScroll = function() {
  const scrollTop = this.container.scrollTop;
  const offsetHeight = this.container.offsetHeight;
  const clientHeight = this.content.clientHeight;
  const shouldTrigger = scrollTop + offsetHeight >= clientHeight;

  if (this.busy) {
    return;
  }

  if (shouldTrigger) {
    this.busy = true;

      this.callback(this.onComplete.bind(this));
  }
};

InfiniteScroll.prototype.onComplete = function() {
  this.busy = false;
  this.onScroll();
};

export default InfiniteScroll;