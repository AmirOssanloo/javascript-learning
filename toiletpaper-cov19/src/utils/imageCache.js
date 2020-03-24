export const imageCache = {};

export const preloadImages = (images, callback) => {
  const imagesClone = [...images];

  if (imagesClone.length === 0) {
    return callback();
  }

  const obj = imagesClone.shift();
  const element = document.createElement('img');
  element.id = obj.id;
  element.src = obj.src;

  element.onload = e => {
    imageCache[e.target.id] = e.target;
    return preloadImages(imagesClone, callback);
  };
};
