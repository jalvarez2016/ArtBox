console.log("hello");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const canvasW = 500;
const canvasH = 500;

window.onload = function () {
  // drawRandom();
  drawLight();
}

function drawLight(){
  for(var x = 0; x < canvasW; x++){
    for(var y = 0; y < canvasH; y++){
      
    }
  }

}

function drawRandom() {
  for(var x = 0; x < canvasW; x++){
    for(var y = 0; y < canvasH; y++){
      const colors = getColor();
      ctx.fillStyle = 'rgb('+ colors[0] +', '+ colors[1] +', '+ colors[2] +')';
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

function getColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const colorArray = [red, blue, green];
  return colorArray;
}
