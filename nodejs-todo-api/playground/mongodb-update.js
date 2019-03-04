const { MongoClient, ObjectID } = require('mongodb');

let obj = new ObjectID();
console.log(obj.toHexString());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) return console.log('Unable to connect to MongoDB server', err);
    else console.log('Connected to MongoDB server');
    
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5c303b30206b8a035211060f')
    }, {
      $set: {
        name: 'Kugo Starfighter'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then(result => {
      console.log(result);
    });

    client.close();
})