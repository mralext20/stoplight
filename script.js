const green = document.getElementById('green')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')

var i = 'g'
var next
function changeLight() {


  if (i == 'g') {
    green.classList.add('glow')
    red.classList.remove('glow')
    next = 'y';
  } else if (i == 'y') {
    yellow.classList.add('glow')
    green.classList.remove('glow')
    next = 'r'
  } else if (i == 'r') {
    red.classList.add('glow')
    yellow.classList.remove('glow')
    next = 'g'
  }
  i = next;
}

setInterval(changeLight, 500);