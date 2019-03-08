const Mongoose = require('./db/mongoose');
const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// const User = require('./models/User');
// const Task = require('./models/Task');

// const main = async () => {
//   const task = await Task.findById('5c82590b5a9fcdb7e4b356bd');
//   await task.populate('owner').execPopulate();
//   console.log(task.owner);

//   const user = await User.findById('5c825c227b41cdb936408278');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// };

// main();