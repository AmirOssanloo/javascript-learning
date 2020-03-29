function ImageCache() {
  const cache = {};

  function add(id, obj) {
    cache[id] = obj;
  };

  function merge(id, property, obj) {
    cache[id] = { ...cache[id], [property]: obj };
  };

  function getTag(id) {
    return cache[id].img;
  };

  function getSrc(id) {
    if (cache[id]) {
      return cache[id].src;
    }

    throw new Error(`Can not find ${id} in cache.`);
  };

  function getAll() {
    return cache;
  };

  return {
    add,
    merge,
    getTag,
    getSrc,
    getAll
  };
};

export default ImageCache;
