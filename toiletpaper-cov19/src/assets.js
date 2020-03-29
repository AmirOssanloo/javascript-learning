import ImageCache from '#utils/ImageCache';

function requireImages(requests) {
  const keys = requests.keys();

  keys.forEach(request => {
    const key = request.slice(2, request.length - 4);
    imageCache.add(key, { src: requests(request).default });
  });

  return Object.keys(imageCache.getAll()).map(key => {
    return { id: key, src: imageCache.getSrc(key) };
  });
}

function cacheImages(images) {
  const imagesClone = [...images];

  if (imagesClone.length === 0) {
    return imageCache;
  }

  const obj = imagesClone.shift();
  const { id, src } = obj;
  const element = new Image();
  element.src = src;

  element.onload = e => {
    imageCache.merge(id, 'img', e.target);
    return cacheImages(imagesClone);
  };
};

const imageCache = new ImageCache();
const requests = require.context('../static/images', true, /\.(gif|jpg|png|svg)$/);
const images = requireImages(requests);
cacheImages(images);

export default imageCache;
