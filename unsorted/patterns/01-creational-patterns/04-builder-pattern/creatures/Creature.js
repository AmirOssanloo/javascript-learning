function Creature(obj) {
  this.obj = obj;
};

Creature.prototype.greeting = function() {
  console.log(`Hello, I am ${this.obj.name}`);
  return this;
};

Creature.prototype.attack = function() {
  if (this.obj.damage) {
    const damage = Math.floor(this.obj.damage + (Math.random() * 10) - 5);
    console.log(`${this.obj.name}: Attacking with ${damage} dmg`);
  } else {
    console.log(`I do not have that ability.`);
  }

  return this;
};

Creature.prototype.defend = function() {
  if (this.obj.armor > 0) {
    console.log(`${this.obj.name}: Armor reduced damage by ${this.obj.armor}`);
  } else {
    console.log(`I have no armor!`);
  }

  return this;
};

module.exports = Creature;