const CreatureFactory = require('./creatures/CreatureFactory');
const CreatureTypes = require('./creatures/CreatureTypes');
const Giant = require('./creatures/giant/GiantBuilder');
const Slime = require('./creatures/slime/SlimeBuilder');

const cf = new CreatureFactory();
cf.register(CreatureTypes.GIANT, Giant);
cf.register(CreatureTypes.SLIME, Slime);

cf.create(CreatureTypes.GIANT)
  .withName('Bogdan')
  .withAttack(24)
  .withArmor(8)
  .build();

cf.create(CreatureTypes.SLIME)
  .withName('Globdi')
  .build();

  cf.create(CreatureTypes.GIANT)
  .withName('Jurgen')
  .withAttack(46)
  .withArmor(0)
  .build();

cf.printCreatures();