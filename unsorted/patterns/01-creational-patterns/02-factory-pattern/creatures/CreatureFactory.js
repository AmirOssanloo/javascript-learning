const CreatureTypes = require('./CreatureTypes');
const Giant = require('./giant/Giant');
const Slime = require('./slime/Slime');

function CreatureFactory() {
  this.creatures = [];
}

CreatureFactory.prototype.create = function(type, name) {
  let creature;
  
  switch (type) {
    case CreatureTypes.GIANT:
      creature = Giant(name);
      this.creatures.push(creature);
      return creature;

    case CreatureTypes.SLIME:
      creature = Slime(name);
      this.creatures.push(creature);
      return creature;
    default:
      return -1;
  }
};

CreatureFactory.prototype.printCreatures = function() {
  this.creatures.forEach(creature => {
    console.log(creature);
  });
};

module.exports = CreatureFactory;