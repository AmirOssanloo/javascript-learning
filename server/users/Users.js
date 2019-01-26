function Users() {
  this.users = [];
}

Users.prototype.create = function(id, name, room) {
  let user = {
    id, name, room,
    cursor: {
      x: 0,
      y: 0
    }
  };

  this.users.push(user);
  return user;
}

Users.prototype.removeById = function(id) {
  let user = this.users.find(user => user.id === id);
  console.log(user);

  if (user)
    this.users = this.users.filter(user => user.id !== id);
  
  return user;
}

Users.prototype.findById = function(id) {
  return this.users.find(user => user.id === id);
}

module.exports = Users;