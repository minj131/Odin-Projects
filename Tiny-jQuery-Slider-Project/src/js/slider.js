sliderVar = 1;
sliderNext = 2;

$(document).ready(function(){
  $("#slider>img#1").fadeIn('slow');
  startSlider();
});

function startSlider(){
  count = $("#slider>img").length;

  loop = setInterval(function(){

    if(sliderNext > count) {
      sliderNext = 1;
      sliderVar = 1;
    }

    $("#slider>img").fadeOut(300);
    $("#slider>img#" + sliderNext).fadeIn(300);

    sliderVar = sliderNext;
    sliderNext = sliderNext + 1;
  }, 3000);
}

function prev(){
  newSlide = sliderVar - 1;
  showSlide(newSlide);
}

function next(){
  newSlide = sliderVar + 1;
  showSlide(newSlide);
}

function stopSlide(){
  window.clearInterval(loop);
}

function showSlide(id){
  stopSlide();
  if(id > count) {
    id=1;
  } else if(id < 1) {
    id = count;
  }

  $("#slider>img").fadeOut(300);
  $("#slider>img#" + id).fadeIn(300);

  sliderVar = id;
  sliderNext = id + 1;
  startSlider();
}

$("#slider>img").hover(
  function(){
    stopSlide();
  },
  function(){
    startSlider();
  }
);
