export const imageCache = {};

export const preloadImages = (images, callback) => {
  const imagesClone = [...images];

  if (imagesClone.length === 0) {
    return callback();
  }

  const obj = imagesClone.shift();
  const img = document.createElement('img');
  img.id = obj.id;
  img.src = obj.src;

  img.onload = e => {
    imageCache[e.target.id] = e.target;
    return preloadImages(imagesClone, callback);
  };
};