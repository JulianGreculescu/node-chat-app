const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate message', () => {
    var from = 'Julian';
    var text = 'Hello everyone';
    var message = generateMessage('Julian', 'Hello everyone');

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate location message', () => {
    var from = 'Julian';
    var latitude = 1;
    var longitude = 2;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({from, url});
  });
});
