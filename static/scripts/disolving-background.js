
var canvas = document.getElementById("background-canvas");
var screenWidth = canvas.width = window.innerWidth;
var screenHeight = canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
drawBackground();

var Kalapa = function(){
  this.x = Math.random() * screenWidth;
  this.y = Math.random() * screenHeight;
  this.vx = (Math.random() * 2) - 1;
  this.vy = (Math.random() * 2) - 1;
  this.size = Math.random() * 30;
  this.lifeTime = Math.random() * 50000;

  this.update = function(dt){
    this.lifeTime -= dt;

    this.x += this.vx;
    this.y += this.vy;

    if(this.x < 0 || this.x > screenWidth || this.y < 0 || this.y > screenHeight)
      this.reset();

    var dx = this.x - mouseX;
    var dy = this.y - mouseY;

    if(dx < 0) dx = dx * -1;
    if(dy < 0) dy = dy * -1;

    if(dx < 100 && dy < 100) this.lifeTime = this.lifeTime / 2/*10 * 7*/;

    if(this.lifeTime < 0) this.reset();
  }

  this.reset = function(){
    this.x = Math.random() * screenWidth;
    this.y = Math.random() * screenHeight;
    this.lifeTime = Math.random() * 100000;

    var dx = this.x - mouseX;
    var dy = this.y - mouseY;

    if(dx < 0) dx = dx * -1;
    if(dy < 0) dy = dy * -1;

    if(dx < 200 || dy < 200) this.lifeTime = 10;
  }
}

var numKalapas = (screenWidth * screenHeight) / 1024;
var kalapas = [];

for(var i = 0; i < numKalapas; i++){
  kalapas.push(new Kalapa());
}

var time = Date.now();
function drawBackground(){
  var deltatime = Date.now() - time;
  time = Date.now();

  context.fillStyle = "#9999FF";
  context.fillRect(0, 0, screenWidth, screenHeight);

  context.strokeStyle = "#7777FF";
  for(var i = 0; i < numKalapas; i++){
    context.beginPath();
    context.arc(kalapas[i].x, kalapas[i].y, kalapas[i].size, 0, 2 * Math.PI);
    context.stroke();
    kalapas[i].update(deltatime);
  }

  requestAnimationFrame(drawBackground);
}

var mouseX = 0;
var mouseY = 0;
window.addEventListener("mousemove", function(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
});
