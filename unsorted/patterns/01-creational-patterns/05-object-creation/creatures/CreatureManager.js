const CreatureFactory = require('./CreatureFactory');
const CreatureTypes = require('./CreatureTypes');
const Giant = require('./giant/GiantBuilder');
const Slime = require('./slime/SlimeBuilder');

const CreatureManager = (function() {
  let instance;

  let factory = new CreatureFactory();
  factory.register(CreatureTypes.GIANT, Giant);
  factory.register(CreatureTypes.SLIME, Slime);

  function init() {
    let creatures = [];

    function addByType(type) {
      const creature = factory.create(type);
      creatures.push(creature);
      return creature;
    };

    function removeByName(name) {
      let removed;

      creatures = creatures.filter(creature => {
        if (creature.name !== name) {
          return true;
        }

        removed = creature.name;
        return false;
      });
      
      return removed;
    };

    function getAll() {
      return creatures;
    };

    function printAll() {
      creatures.forEach(creature => {
        console.log(creature.name);
      });
    }

    return {
      addByType,
      removeByName,
      getAll,
      printAll
    }
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  }
})();

module.exports = CreatureManager;