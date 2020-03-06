require("@babel/runtime/regenerator");
require("webpack-hot-middleware/client?reload=true");
require("./main.css");
require("./index.html");

const a = async (args) => {
  const {a, b} = args;
  await console.log('Hello from the future');
  console.log('Hello from after the future');
}

a({a: 1, b: 2});