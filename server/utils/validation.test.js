const expect = require('expect');
const {isRealString} = require('./validation');

describe('Is Real String', () => {
  it('should reject non-string values', () => {
    let name = isRealString('')
    let room = isRealString(99);

    expect(name).not.toBeTruthy();
    expect(room).not.toBeTruthy();
  });

  it('should reject string with only spaces', () => {
    let str = isRealString('   '.trim());

    expect(str).not.toBeTruthy();
  });

  it('should allow real string', () => {
    let name = isRealString('Tester'.trim());
    let room = isRealString('  The test-room  '.trim());

    expect(name).toBeTruthy();
    expect(room).toBeTruthy();
  });
});