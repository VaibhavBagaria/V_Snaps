NoseX = 0;
NoseY = 0;
NImage = ""
function preload() {
    NImage = loadImage("Clown_Nose.jpg")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    Video = createCapture(VIDEO)
    Video.hide()
    PoseNet = ml5.poseNet(Video, Model_Loaded)
    PoseNet.on('pose', GotPoses)
}

function draw() {
    image(Video, 0, 0, 300, 300)
    image(NImage, NoseX, NoseY, 25,25)
}

function Take_Snapshot() {
    save("Clown_Face.png")
}

function Model_Loaded() {
    console.log("model is loaded");
}

function GotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        NoseX = results[0].pose.nose.x - 225
        NoseY = results[0].pose.nose.y - 85
    }
}

function Logout() {
    window.location="index.html";
}