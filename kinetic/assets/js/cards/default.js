
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
