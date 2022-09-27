song1 = "";
song2 = "";

function preload()
{
    console.log("soundLoaded");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video , 0 , 0 , 600 , 500);
}