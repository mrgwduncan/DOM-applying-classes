// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {

  one()
  two()  
  three()  
  makeVisible()
}

function one () {
  var one = document.getElementById('one')
  one.classList.add('blue')
}

function two () {
  var one = document.getElementById('two')
  one.classList.add('green')
}
function three () {
  var one = document.getElementById('three')
  one.classList.add('blue')
}
function makeVisible () {
 var vis = document.getElementsByClassName('invisible')	
 vis[0].classList.add('visible')
}
