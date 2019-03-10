const expect = require('expect');
const {createMessage} = require('./message');

describe('Generate Message', () => {
  it('should create message object', () => {
    let username = 'Terry';
    let text = 'Morbi ullamcorper tellus erat, sit amet sagittis dolor tincidunt a.';
    let message = createMessage(username, text);

    expect(message).toMatchObject(expect.objectContaining({username, text}));
    expect(typeof message.createdAt).toBe('number');
  });
});