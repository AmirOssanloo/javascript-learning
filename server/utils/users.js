class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    let user = {
      id, name, room,
      cursor: {x: null, y: null}
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
    // user.cursor.x = pos.x;
    // user.cursor.y = pos.y;
  }

  getUser(id) {
    return this.users.find(user => user.id === id);
  }

  getUserList(room) {
    return this.users
      .filter(user => user.room === room)
      .map(user => user.name);
  }
}

module.exports = {Users};