const expect = require('expect');
const {generateMessage} = require('./message');

describe('Generate Message', () => {
  it('should generate correct message object', () => {
    let from = 'Tester';
    let text = 'My test text';
    let message = generateMessage(from, text);

    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe('number');
  });
});