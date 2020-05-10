const CreatureFactory = require('./creatures/CreatureFactory');
const CreatureTypes = require('./creatures/CreatureTypes');
const Giant = require('./creatures/giant/Giant');
const Slime = require('./creatures/slime/Slime');

const cf = new CreatureFactory();
cf.register(CreatureTypes.GIANT, Giant);
cf.register(CreatureTypes.SLIME, Slime);
cf.create(CreatureTypes.GIANT, 'Bogdan');
cf.create(CreatureTypes.SLIME, 'Sloooms');
cf.create(CreatureTypes.GIANT, 'Greger');
cf.printCreatures();