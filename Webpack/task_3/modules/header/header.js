require('./header.css');

const $ = require('jquery');

$(() => {
  console.log('Init header');
  $('body').append('<div id="logo"></div>');
  $('body').append('<h1>Holberton Dashboard</h1>');
});

