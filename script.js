(function() {

// geo location
navigator.geolocation.getCurrentPosition(function(position) {
  var lat = position.coords.latitude.toFixed(2),
    lon = position.coords.longitude.toFixed(2),
    mapAttribute = 'https://maps.google.com/maps?q='
      + position.coords.latitude
      + ','
      + position.coords.longitude
      + '&hl=es;z=14&output=embed';

  document.getElementById('location').innerHTML = '[' + lat + ', ' + lon + ']';
  document.getElementById('map').setAttribute('src', mapAttribute);
});

// device orientation
window.addEventListener('deviceorientation', function(event) {
  var beta = event.beta.toFixed(2), // front-back
    betaFloor = Math.abs(90 - Math.floor(beta)),
    gamma = event.gamma.toFixed(2), // left-right
    gammaFloor = Math.floor(gamma),
    boxEl = document.getElementById('rotate');

  document.getElementById('orientation').innerHTML = '&alpha; (direction): ' + alpha + '&beta; (front-back): ' + beta + ', &gamma; (left-right): ' + gamma;
  boxEl.style.webkitTransform ='rotate('+ gammaFloor +'deg) rotate3d(1,0,0, '+ betaFloor + 'deg)';
  boxEl.style.transform ='rotate('+ gammaFloor +'deg) rotate3d(1,0,0, '+ betaFloor + 'deg)';
});

// vibrate
document.getElementById('dash').addEventListener('click', function() {
  navigator.vibrate(500);
});

document.getElementById('dot').addEventListener('click', function() {
  navigator.vibrate(100);
});

// Ambience
window.addEventListener('devicelight', function(event) {
  var ambience = event.value;
  document.getElementById('ambience').innerHTML = ambience;
});

// Screen orientation
screen.orientation.addEventListener('change', function() {
  var orientationType = screen.orientation.type,
    orientationAngle = screen.orientation.angle;
  document.getElementById('orientation').innerHTML = orientationType + ', ' + orientationAngle;
});

})();
