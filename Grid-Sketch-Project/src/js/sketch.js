var rowGrid = 50;
var defaultColor = "black";

$(document).ready(function() {

    $('.title').append('Grid-A-Sketch!');
    $('.grid-ins').append('Hover your mouse across the sketchpad below!');

 //load default grid
  createGrid(rowGrid);

//event listeners
  $('input#borders').change( function (){
    if($(this).is(':checked')) {
      $('.square').css('outline', '1px solid white');
    } else {
      $('.square').css('outline', 'none');
    }
  });

  $("#newSize").click(function() {
    newSize();
  });

  $("#default").click(function() {
    clearOption();

    $(".square").mouseenter(function(){
      $(this).css("background-color", defaultColor);

    });
  });

  $("#trail").click(function() {
    trail();
  });

  $("#gradient").click(function() {
    gradient();
  });

  $("#random").click(function() {
    randomColor();
  });

  $("#clear").click(function() {
    clearOption();

  });

});

//function to create default grid 50x50
function createGrid(rowGrid) {
  for (var i = 0; i < (rowGrid * rowGrid); i++){
    $('.grid-container').append('<div class="square"></div>')
  }

  var width = ($(".grid-container").width())/ rowGrid;
  $(".square").css({"width":width ,"height":width});

  $(".square").mouseenter(function(){

    $(this).css("background-color", defaultColor);

  });
}

//function to create grid with new size
function newSize() {

  $(".square").remove();

  var inputSquares = parseFloat(prompt("How many boxes (0 - 100) do you want on each side? " + " Press 'Cancel' for default grid."));

  if(isNaN(inputSquares) || (inputSquares < 1 || inputSquares > 100)) {
    createGrid(rowGrid);
  } else {
    createGrid(inputSquares);
  }
}

//function for trail option
function trail(){
  clearOption();

  $(".square").mouseenter(function() {
		$(this).fadeTo(0, 0);
	});

  $(".square").mouseleave(function() {
    $(this).fadeTo(600, 1);
  });
}

//function for gradient option
function gradient() {
  clearOption();

  $('.grid-container').css('background-color', 'black')
  $(".square").mouseenter(function(){
    $(this).css("background-color", "#c0c0c0");
    $(this).css("opacity", $(this).css("opacity") * 0.80);
  });
}

//function for random color hover
function randomColor() {
  clearOption();
  $('.square').mouseover(function(){
    $(this).css("background-color", getRandomColor());
  });
}

//function to generate random hex color
function getRandomColor(){
  return (Math.random().toString(16) + '000000').slice(2, 8);
}

//function to clear grid
function clearOption() {
  $(".square").unbind(); //unbinds event selector when choosing a new one
  $('.square').css({"background-color":"#c0c0c0",
		"opacity":"1"});
}
