let socket = io();

function scrollToBottom() {
  let messages = $('#messages');
  let newMessage = messages.children('li:last-child');

  let clientHeight = messages.prop('clientHeight');
  let scrollTop = messages.prop('scrollTop');
  let scrollHeight = messages.prop('scrollHeight');
  let newMessageHeight = newMessage.innerHeight();
  let lastMessageHeight = newMessage.prev().innerHeight();

  if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
    messages.scrollTop(scrollHeight);
  }
}

socket.on('connect', () => {
  let params = $.deparam(window.location.search);

  socket.emit('join', params, (err) => {
    if (err) {
      alert(err);
      window.location.href = '/';
    }
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('updateUserList', (users) => {
  let ol = $('<ol></ol>');

  users.forEach(user => {
    ol.append($('<li></li>').text(user));
  });

  $('#users').html(ol);
});

socket.on('newMessage', (msg) => {
  let time = moment(msg.createdAt).format('h:mm a');
  let template = $('#message-template').html();
  let html = Mustache.render(template, {
    createdAt: time,
    from: msg.from,
    text: msg.text
  });

  $('#messages').append(html);
  scrollToBottom();
});

socket.on('newLocationMessage', (msg) => {
  let time = moment(msg.createdAt).format('h:mm a');
  let template = $('#location-message-template').html();
  let html = Mustache.render(template, {
    createdAt: time,
    from: msg.from,
    url: msg.url,
  });

  $('#messages').append(html);
  scrollToBottom();
});

$('#message-form').on('submit', (e) => {
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');

  socket.emit('createMessage', {
    from: 'User',
    text: messageTextbox.val()
  }, () => {
    messageTextbox.val('')
  });
});

let locationButton = $('#send-location');
locationButton.on('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(position => {
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, () => {
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location.');
  });
});