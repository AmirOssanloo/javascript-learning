const Creature = require('../Creature');

function SlimeBuilder(name) {
  this.name = `Slimy ${name}`;
};

SlimeBuilder.prototype.build = function() {
  if (!this.name) throw new Error('Name is required');

  this.creature = new Creature(this);
};

SlimeBuilder.prototype.withName = function(name) {
  this.name = `Slimy ${name}`;
  return this;
};

SlimeBuilder.prototype.get = function() {
  return this.creature;
};

module.exports = SlimeBuilder;