
// This appears at the top of the page
var headline = 'Happy Holidays';


var stage = new Kinetic.Stage({
      container: 'card'
    , width: 800
    , height: 600
  });


var layer = new Kinetic.Layer();
stage.add(layer);


// BEGIN: Background Image
var image1 = new Image();
image1.onload = function() {

    var bgImage = new Kinetic.Image({
        x: 0,
        y: 0,
        image: image1,
        width: 800,
        height: 600
    });

    layer.add(bgImage);
    bgImage.moveToBottom();
    layer.draw();
};
image1.src = 'assets/images/backgrounds/trees-stripes.png';

// END: Background Image


// BEGIN: Draw some circles
for(var m=0; m < 10; m++)
{
    var circle = new Kinetic.Circle({
        x: m * 100,
        y: 50,
        radius: 20,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });
    layer.add(circle);
    circle.moveToTop();
}

for(var m=0; m < 10; m++)
{
    var circle = new Kinetic.Circle({
        x: (m * 100) + 50,
        y: 100,
        radius: 20,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4
    });
    layer.add(circle);
    circle.moveToTop();
}

var star = new Kinetic.Star({
    x: 130,
    y: 130,
    numPoints: 6,
    innerRadius: 30,
    outerRadius: 70,
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 4
});

layer.add(star);
layer.draw();
// END: Draw some circles



// BEGIN: Santa Image
var santaImage;
var image2 = new Image();
image2.onload = function() {
    santaImage = new Kinetic.Image({
        x: 520,
        y: 135,
        image: image2,
        draggable: true
    });

    layer.add(santaImage);
    santaImage.moveToTop();
    layer.draw();


    var amplitude = 200; // how far should it go
    var period = 4000;   // how long should it take
    var centerX = stage.getWidth() / 2; // find the center of the stage

    var hidden = false;
    var counter = 0;
    var anim = new Kinetic.Animation(function(frame) {
        santaImage.setX(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerX);

        // Rotating star
        star.rotate(0.005);
    }, layer);

    anim.start();

};
image2.src = 'assets/images/things/santa-unicycle.png';
// END: Santa Image


