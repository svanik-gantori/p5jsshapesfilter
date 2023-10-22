function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(200, 200);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

  fill(155, 183, 89);
  stroke(255, 255, 0);
  circle(330, 100, 100);

  circle(330, 100, 80);

  circle(330, 390, 100);

  circle(330, 390, 80);

  fill(0, 128, 0);
  stroke(0, 128, 0);
 

  

  rect(100, 90, 20, 300);

  rect(520, 90, 20, 300);
}

function take_snapshot(){    
  save('student_name.png');
}
