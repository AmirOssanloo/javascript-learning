const { MongoClient, ObjectID } = require('mongodb');

let obj = new ObjectID();
console.log(obj.toHexString());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) return console.log('Unable to connect to MongoDB server', err);
    else console.log('Connected to MongoDB server');
    
    const db = client.db('TodoApp');

    // // Delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
    //   console.log(result);
    // });

    // // Delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
    //   console.log(result);
    // });

    // Find one and delete
    db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
      console.log(result);
    });

    // client.close();
})