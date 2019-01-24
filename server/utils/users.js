class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, username, room) {
    let user = {
      id, username, room,
      x: null, y: null
    };

    this.users.push(user);
    return user;
  }

  removeUser(id) {
    let user = this.getUser(id);

    if (user)
      this.users = this.users.filter(user => user.id !== id);
    
    return user;
  }

  updateUserCursor(user, pos) {
    user.x = pos.x;
    user.y = pos.y;
  }

  getUser(id) {
    return this.users.find(user => user.id === id);
  }

  getUserList(room) {
    return this.users.filter(user => user.room === room);
  }
}

module.exports = {Users};