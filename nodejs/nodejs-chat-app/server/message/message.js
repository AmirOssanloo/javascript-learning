const createMessage = (username, text) => ({
  username, text,
  createdAt: Date.now()
});

module.exports = {createMessage};