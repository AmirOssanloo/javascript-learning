module.exports = (function() {
  var instance;
  var num = 0;

  function init() {
    num++;
    var store = (`I am the store: ${num}`);

    return {
      store: store
    };
  }

  return (function() {
    if (!instance) {
      instance = init();
    }

    return instance;
  })()
})();