function preload() {
    
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 230, 150, 220, 200);
    fill("blue");
    stroke("blue");
    circle(30, 30, 20);
    rect(40, 25, 550, 10);
    rect(40, 450, 550, 10);
    circle(30, 455, 20);
    circle(590, 455, 20);
    circle(590, 30, 20);
}
function capturar() {
    save("retrato");
}
