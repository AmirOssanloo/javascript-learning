const Creature = require('../Creature');

function GiantBuilder() {
  this.name;
  this.damage;
  this.armor;
  this.creature;
};

GiantBuilder.prototype.build = function() {
  if (this.name === null) throw new Error('Name is required');
  if (this.damage === null) throw new Error('Attack is required');
  if (this.armor === null) throw new Error('Armor is required');

  this.creature = new Creature(this);
  return this.creature;
};

GiantBuilder.prototype.withName = function(name) {
  this.name = `${name} The Giant`;
  return this;
};

GiantBuilder.prototype.withAttack = function(damage) {
  this.damage = damage;
  return this;
};

GiantBuilder.prototype.withArmor = function(armor) {
  this.armor = armor;
  return this;
};

GiantBuilder.prototype.get = function() {
  return this.creature;
};

module.exports = GiantBuilder;