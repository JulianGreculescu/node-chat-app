var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var li = jQuery('<li></li>');
  li.text(`${message.from} ${formattedTime}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function (message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var li = jQuery('<li></li>');
  li.text(`${message.from} ${formattedTime}: `);
  var a = jQuery('<a target="_blank">My Current location</a>');
  a.attr('href', message.url);
  li.append(a);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  var messageTextBox = jQuery('[name=message]');
  socket.emit('createMessage', {
    from: 'User',
    text: messageTextBox.val()
  }, function () {
    messageTextBox.val('');
  });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation is not supported by your browser');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location ...');
  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage', {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    });
    console.log(position);
  },
  function () {
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch the location');
  })
});
