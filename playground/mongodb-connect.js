const { MongoClient, ObjectID } = require('mongodb');

let obj = new ObjectID();
console.log(obj.toHexString());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) return console.log('Unable to connect to MongoDB server', err);
    else console.log('Connected to MongoDB server');
    
    const db = client.db('TodoApp');
    client.close();
})