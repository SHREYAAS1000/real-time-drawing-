function setup()
{
    canvas=createCanvas(550,500);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);

poseNet = ml5.poseNet(video, modeLoaded);

poseNet.on("pose",gotposes)

}

function draw()
{
    background("#0000FF");
    square(nose_x,nose_y,difference);
    fill("#ff0000");
    stroke("#FFD700");

    document.getElementById("square_side").innerHTML = "width and height of a square will be = " + difference +"px";
}

function modeLoaded()
{
    console.log("poseNet is Loaded");
}

nose_x=0;
nose_y=0;
difference=0;
leftwristX=0;
rightwristX=0;

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x = " + nose_x + "nose y = " + nose_y);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX - rightwristX); // floor function used to remove decimal point 

        console.log("leftwristx = " + leftwristX + "rightwristx = " + rightwristX + "difference = " + difference);
    }
}