const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('Generate Message', () => {
  it('should generate correct message object', () => {
    let from = 'Tester';
    let text = 'My test text';
    let message = generateMessage(from, text);

    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('Generate Location Message', () => {
  it('should generate correct location object', () => {
    let from = 'Tester';
    let longitude = 31.1679463;
    let latitude = 53.16593468;
    let url = `https://google.com/maps?q=${longitude},${latitude}`
    let message = generateLocationMessage(from, longitude, latitude);

    expect(message).toMatchObject({from, url});
    expect(typeof message.createdAt).toBe('number');
  });
});