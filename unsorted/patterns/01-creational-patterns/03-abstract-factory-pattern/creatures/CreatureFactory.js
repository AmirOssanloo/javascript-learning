function CreatureFactory() {
  this.types = {};
  this.creatures = [];
}

CreatureFactory.prototype.create = function(type, name) {
  const obj = new this.types[type]();
  const creature = obj.create(name);
  this.creatures.push(creature);

  return creature;
};

CreatureFactory.prototype.register = function(type, obj) {
  if (typeof obj.prototype.create === "function") {
    this.types[type] = obj;
  }
};

CreatureFactory.prototype.printCreatures = function() {
  this.creatures.forEach(creature => {
    console.log(creature);
  });
};

module.exports = CreatureFactory;