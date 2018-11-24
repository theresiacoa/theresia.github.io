var assetsPath = 'assets/';
var bounceCycle = [
  'tile050.png', 'tile051.png', 'tile052.png', 'tile053.png', 'tile054.png',
  'tile055.png', 'tile056.png', 'tile057.png',
];
var jumpingRollCycle = [
  'tile050.png', 'tile051.png', 'tile052.png', 'tile053.png', 'tile054.png',
  'tile055.png', 'tile056.png', 'tile057.png','tile058.png', 'tile059.png', 
  'tile060.png', 'tile061.png', 'tile062.png', 'tile063.png', 'tile064.png',
  'tile065.png', 'tile066.png', 'tile067.png', 'tile068.png', 'tile069.png',
  'tile070.png', 'tile071.png', 'tile072.png', 'tile073.png', 'tile074.png',
  'tile075.png', 'tile076.png', 'tile077.png', 'tile078.png', 'tile079.png',
]

var slime = document.getElementById("slime");
var slimeAnimation;

//SLIME --- starting point, for image, BOUNCE ANIMATION
document.addEventListener('DOMContentLoaded', function () {
  bounceAnimation();
  var gameTimer;
  document.getElementById('startGameBtn').addEventListener('click', function () {
    if (gameTimer) {
      clearInterval(gameTimer);     //to stop timer
      gameTimer = undefined;
      bounceAnimation();
      return;
    }
    var offset = 0;
    gameTimer = setInterval(function () {
      document.getElementsByTagName('body')[0].style.backgroundPosition = 'left ' + offset + 'px center';
      offset -= 3;
    }, 70);
    jumpRollAnimation();
  });
}, false);

function bounceAnimation() {
  if (slimeAnimation) {
    clearInterval(slimeAnimation);
  }
  var bounceIndex = 0;
  slimeAnimation = setInterval(function () {
    var frame = assetsPath + bounceCycle[bounceIndex];    //set the path
    slime.src = frame;                                    //connect pwd to img id="slime"
    bounceIndex++;
    if (bounceIndex === bounceCycle.length) {
      bounceIndex = 0;
    }
  }, 120);
}

function jumpRollAnimation() {
  if (slimeAnimation) {
    clearInterval(slimeAnimation);
  }
  let index = 0;
  slimeAnimation = setInterval(function () {
    var jumpRollCyc = assetsPath + jumpingRollCycle[index];    //set the path
    slime.src = jumpRollCyc;                                    //connect pwd to img id="slime"
    index++;
    if (index === jumpingRollCycle.length) {
      index = 0;
    }
  }, 120);
}




