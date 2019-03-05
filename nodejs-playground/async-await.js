// Simple example
const add = (a, b) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (a < 0 || b < 0)
      return reject('Numbers must be positive');

    resolve(a + b)
  }, 1000);
});

const doWork = async () => {
  const sum1 = await add(1, 99);
  const sum2 = await add(sum1, 50);
  const sum3 = await add(sum2, 3);

  return sum3;
}

doWork()
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Real life example
require('../nodejs-task-app/src/db/mongoose');
const User = require('../nodejs-task-app/src/models/User');

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {age});
  const count = await User.countDocuments({age});

  return count;
}

updateAgeAndCount('5c7d6c883807a215095686d1', 0)
  .then(count => console.log(count))
  .catch(err => console.log(err.message))