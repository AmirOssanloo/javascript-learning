function sayHi(name) {
  let age = 10;

  age = 4;

  return age + name;
}

const things = ['cool', 'double'];
const age = sayHi(things[0]);

function testfunc(what) {
  return `this should error? ${what}`;
}

const test = testfunc(age);

export default { this: { test } };
