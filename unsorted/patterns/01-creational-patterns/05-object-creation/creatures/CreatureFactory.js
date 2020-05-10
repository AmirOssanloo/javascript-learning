function CreatureFactory() {
  this.types = {};
  this.creatures = [];
};

CreatureFactory.prototype.create = function(type, name) {
  const creature = new this.types[type](name);
  this.creatures.push(creature);

  return creature;
};

CreatureFactory.prototype.register = function(type, obj) {
  if (typeof obj.prototype.get === "function") {
    this.types[type] = obj;
  }
};

module.exports = CreatureFactory;