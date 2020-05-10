const CreatureFactory = require('./creatures/CreatureFactory');
const CreatureTypes = require('./creatures/CreatureTypes');

const cf = new CreatureFactory();
cf.create(CreatureTypes.GIANT, 'Bogdan');
cf.create(CreatureTypes.SLIME, 'Sloooms');
cf.create(CreatureTypes.GIANT, 'Greger');
cf.printCreatures();