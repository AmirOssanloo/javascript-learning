const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {id: '1', name: 'Terry', room: 'Test Room A'},
      {id: '2', name: 'Larry', room: 'Test Room B'},
      {id: '3', name: 'Berry', room: 'Test Room A'}
    ]
  });

  it('should add new user', () => {
    let user = {
      id: '4',
      name: 'Tester',
      room: 'Test Room B'
    };

    let res = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual(expect.arrayContaining([res]));
  });

  it('should return names for [Test Room A]', () => {
    let userList = users.getUserList('Test Room A');
    
    expect(userList).toEqual(['Terry', 'Berry']);
  });

  it('should return names for [Test Room B]', () => {
    let userList = users.getUserList('Test Room B');
    
    expect(userList).toEqual(['Larry']);
  });

  it('should find user', () => {
    let id = '1';
    let user = users.getUser(id);

    expect(user.id).toEqual(id);
  });

  it('should not find user', () => {
    let id = 44;
    let user = users.getUser(id);

    expect(user).not.toBeTruthy();
  });
  
  it('should remove a user', () => {
    let id = '1';
    let user = users.removeUser(id);
    
    expect(user.id).toEqual(id);
    expect(users.users).not.toEqual(expect.arrayContaining([user]));
  });
  
  it('should not remove a user', () => {
    let id = '33';
    let user = users.removeUser(id);
    
    expect(user).not.toBeTruthy();
  });
});