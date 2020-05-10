const CreatureManager = require('./creatures/CreatureManager');
const CreatureTypes = require('./creatures/CreatureTypes');

const creatureManager = CreatureManager.getInstance();

const bogdan = creatureManager.addByType(CreatureTypes.GIANT)
  .withName('Bogdan')
  .withAttack(24)
  .withArmor(8)
  .build();

const globdi = creatureManager.addByType(CreatureTypes.SLIME)
  .withName('Globdi')
  .build();

const jurgen = creatureManager.addByType(CreatureTypes.GIANT)
  .withName('Jurgen')
  .withAttack(46)
  .withArmor(0)
  .build()

// creatureManager.printAll();

bogdan.attack();
bogdan.defend();
bogdan.attack();
globdi.attack();
globdi.defend();
jurgen.attack();
jurgen.defend();
jurgen.attack();