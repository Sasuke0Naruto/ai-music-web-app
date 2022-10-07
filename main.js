song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
righttWristY = 0;

function preload(){
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); 
}

function modelLoaded() {
    console.log('PoseNet Is Initilaized');
}

function draw(){
    image(video, 0, 0, 600, 500);
}