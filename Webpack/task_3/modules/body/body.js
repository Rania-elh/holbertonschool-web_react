require('./body.css');

const $ = require('jquery');
const _ = require('lodash');

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$(() => {
  $('body').append('<p>Dashboard data for the students</p>');

  const $button = $('<button>Click here to get started</button>');
  $('body').append($button);
  $('body').append("<p id='count'></p>");

  $button.on('click', _.debounce(updateCounter, 500));
});

module.exports = { updateCounter };

