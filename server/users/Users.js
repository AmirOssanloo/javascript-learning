function Users() {
  this.users = [];
}

Users.prototype.create = function(id, name, room) {
  let user = {
    id, name, room,
    cursor: {
      x: null,
      y: null
    }
  };

  this.users.push(user);
  return user;
}

Users.prototype.removeById = function(id) {
  this.users = this.users.filter(user => user.id !== id);
  return this.findById(id);
}

Users.prototype.findById = function(id) {
  return this.users.find(user => user.id === id);
}

module.exports = Users;