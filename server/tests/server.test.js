const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

const { app } = require('../server');
const { Todo } = require('../models/todo');

const todos = [
  {
    _id: new ObjectID(),
    text: 'Second test todo'
  },
  {
    _id: new ObjectID(),
    text: 'First test todo',
    completed: true,
    completedAt: 1543292521553
  }
];

beforeEach(done => {
  Todo.deleteMany().then(() =>
    Todo.insertMany(todos)).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', done =>{
    let text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({ text })
      .expect(200)
      .expect(res => expect(res.body.text).toBe(text))
      .end((err, res) => {
        if (err) return done(err);

        Todo.find({ text }).then(todo => {
          expect(todo.length).toBe(1);
          expect(todo[0].text).toBe(text);
          done();
        }).catch(e => done(e));
      });
  });

  it('should not create todo with invalid body data', done => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);

        Todo.find().then(todo => {
          expect(todo.length).toBe(2);
          done();
        }).catch(err=> done(err));
      });
  });
});

describe('GET /todos', () => {
  it('should get all todos', done => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect(res => {
        expect(res.body.todos.length).toBe(2)
      })
      .end(done);
  });
})

describe('GET /todos/:id', () => {
  it('should return todo doc', done => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect(res => {
        expect(res.body.todo.text).toBe(todos[0].text)
      })
      .end(done);
  });

  it('should return 404 if todo not found', done => {
    request(app)
      .get(`/todos/${new ObjectID().toHexString()}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object IDs', done => {
    request(app)
      .get('/todos/13827248284')
      .expect(404)
      .end(done);
  });
});

describe('DELETE /todos/:id', () => {
  it('should remove a todo', done => {
    let hexId = todos[1]._id.toHexString();

    request(app)
      .delete(`/todos/${hexId}`)
      .expect(200)
      .expect(res => {
        expect(res.body.todo._id).toBe(hexId);
      })
      .end((err, res) => {
        if (err) return done(err);

        Todo.findById(hexId).then(todo => {
          expect(todo).toBeNull();
          done();
        }).catch(err=> done(err));
        
      });
  });

  it('should return 404 if todo not found', done => {
    request(app)
      .delete(`/todos/${new ObjectID().toHexString()}`)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object IDs', done => {
    request(app)
      .delete('/todos/13827248284')
      .expect(404)
      .end(done);
  });
});

describe('UPDATE /todos/:id', () => {
  it('should update the todo', done => {
    let id = todos[0]._id.toHexString();
    let text = "Updated todo from Supertest";

    request(app)
      .patch(`/todos/${id}`)
      .send({
        text: text,
        completed: true
      })
      .expect(200)
      .expect(res => {
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(true);
        expect(typeof res.body.todo.completedAt).toBe('number');
      })
      .end(done);
  });

  it('should clear completedAt when todo is not completed', done => {
    let id = todos[1]._id.toHexString();
    let text = "Updated todo from Supertest";

    request(app)
      .patch(`/todos/${id}`)
      .send({
        text: text,
        completed: false
      })
      .expect(200)
      .expect(res => {
        expect(res.body.todo.text).toBe(text);
        expect(res.body.todo.completed).toBe(false);
        expect(res.body.todo.completedAt).toBe(null);
      })
      .end(done);
  });
});