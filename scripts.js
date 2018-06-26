var robots = [];
var btnRebuild = document.getElementById('btn-rebuild');

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
  for(var i = 0; i < howMany; i++) {
    robots.pop(i);
    createRobot();
    // checkRobot();
    // for(var x = 0; x < robots.length; x++) {
    //   if(robots[i] == ) {
    //     createRobot();
    //     document.write('Match found, robot rebuilt again<br>');
    //   }
    // }
  }
  
  // robotList();
  // return robots;
  console.log('robots: ' + robots);
  document.write('<p>' + howMany + ' robots were rebuilt.</p>');
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
// console.log(robots);
console.log(rebuildRobots(), robots);
