getTime();
setInterval(getTime, 1000);

function getTime () {
  var time = moment().format('HH:mm');

  $('#time').text(time);
}