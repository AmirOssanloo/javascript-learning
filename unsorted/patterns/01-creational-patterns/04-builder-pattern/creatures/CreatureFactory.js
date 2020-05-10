function CreatureFactory() {
  this.types = {};
};

CreatureFactory.prototype.create = function(type, name) {
  return this.types[type](name);
};

CreatureFactory.prototype.register = function(type, obj) {
  if (typeof obj.prototype.get === "function") {
    this.types[type] = obj;
  }
};

module.exports = CreatureFactory;