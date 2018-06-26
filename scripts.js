var robots = [];
var btnRebuild = document.getElementById('btn-rebuild');
var output = document.getElementById('main-content');
var message = document.getElementById('message');

btnRebuild.addEventListener('click', rebuildRobots);

function robotList() {
  listHTML = '<ol>';
  for(var i = 0; i < 10; i++) {
    // console.log('step' + i);
    createRobot();
    listHTML += robots[i];
  }
  listHTML += '</ol>';
  var output = document.getElementById('main-content');
  output.innerHTML = listHTML;
}

function createRobot() {
  var robotSku = generateSku();
  var robotName = generateName();
  robots.push('<li>SKU: ' + robotSku + ', Name: ' + robotName + '</li>');
  return robots;
  // var output = document.write('<p>SKU: ' + robotSku + ', Name: ' + robotName + '</p>');
  // return output;
}

function generateSku() {
  return Math.floor((Math.random() + 1) * 0x100000);
}

function generateName() {
  // return Math.random().toString(36).substr(1,24);
  return Math.floor((Math.random() + 1) * 0x100000);
}

function rebuildRobots() {
  var howMany = Math.floor((Math.random() * (10) + 1));
  console.log('howMany: ' + howMany);
  // robots.pop(howMany);
  for(var i = 0; i < howMany; i++) {
    robots.pop();
  }
  for(var i = 0; i < howMany; i++) {

    var robotSku = generateSku();
    var robotName = generateName();
    robots.push('<li>SKU: ' + robotSku + ', Name: ' + robotName + '</li>');
    // console.log(i);
    // console.log(robots);
    // checkRobot();
    // for(var x = 0; x < robots.length; x++) {
    //   if(robots[i] == ) {
    //     createRobot();
    //     document.write('Match found, robot rebuilt again<br>');
    //   }
    // }
  }

  output.innerHTML = '<ol>' + robots.join('') + '</ol>';
  // return robots;
  console.log('robots: ' + robots);
  console.log(robots);
  message.innerHTML = '<p>' + howMany + ' robots were rebuilt.</p>';
}

// function checkRobot() {
//   for(var x = 0; x < robots.length; x++) {
//     if(this == robot[i]) {
//       robots.pop(i);
//       createRobot();
//   }
// }

// createRobot();
robotList();
console.log(robots);
// console.log(rebuildRobots(), robots);
