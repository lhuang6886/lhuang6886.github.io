var testjson;
var pvectors = [];
var xcent, ycent, zcent;
var xmin, ymin, zmin;
var r;

function preload(){
  testjson = loadJSON("testfull.json");
}
function setup() {
  createCanvas(400, 400, WEBGL);
  rectMode(CENTER)
  xcent = 0
  ycent = 0
  zcent = 0


  let item1 = testjson[0][0][0].centroids
  // print(item1);
  let item2 = testjson[0][0][0].speeds;
  // print(item2);

  let xs = []
  let ys = []
  let thicks = []
  for (let i=0; i<item1.length-1; i++){
    xs.push(item1[i][0])
    ys.push(item1[i][1])
    thicks.push(map(item2[i],0,15,300,50))
  }
  xmin = min(xs)
  ymin = min(ys)
  zmin = min(thicks)
  // print(xmin)
  // print(ymin)
  // print(zmin)

  for (let i=0; i<item1.length-1; i++){
    let thick = map(item2[i],0,15,300,50);
    pvectors.push(new p5.Vector(item1[i][0]-xmin, item1[i][1]-ymin, thick-zmin));
    xcent += item1[i][0]-xmin
    ycent += item1[i][1]-ymin
    zcent += thick-zmin
  }
  xcent = xcent/pvectors.length
  ycent = ycent/pvectors.length
  zcent = zcent/pvectors.length
  print(xcent)
  print(ycent)
  print(zcent)
}



function draw() {
  background(225);
  r = map(mouseX, 0, width, -PI, PI)
  noFill();
  stroke(255,0,0);
  strokeWeight(3);
  rotateY(r);

  push();

  translate(-xcent, -ycent, -zcent)
  beginShape();
  for (let i=0; i<pvectors.length/2; i++){
    curveVertex(pvectors[2*i].x, pvectors[2*i].y, pvectors[2*i].z);
  }
  endShape();
  pop()


}
