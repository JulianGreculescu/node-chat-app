const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate message', () => {
    var from = 'Julian';
    var text = 'Hello everyone';
    var message = generateMessage('Julian', 'Hello everyone');

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

