leftWristX = "";
leftWristY = "";
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800,400);
    video.parent('game_console');

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);


}
function modelLoaded(){
	console.log("model is loaded")

}
function gotPoses(results){
	if(results.length > 0)
  {
	console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    
  }
}

function draw() {
	game()
}






