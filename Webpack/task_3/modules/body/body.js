import './body.css';
import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$(() => {
  $('body').append('<p>Dashboard data for the students</p>');
  const $button = $('<button>Click here to get started</button>');
  const $count = $("<p id='count'></p>");
  $('body').append($button);
  $('body').append($count);

  $button.on('click', _.debounce(updateCounter, 500));
});

