var autoDisplayTime = new Date().getTime();
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var current=3;
var doAuto = true;
var differenceInTime;

function plusSlides(n){
  stopAutoAnimation();
  showSlides(n);
}

function stopAutoAnimation(){
  if(doAuto){
    doAuto = false;
  
    document.querySelector('.images').style.animationPlayState = "paused";
    current--;
    var now = new Date().getTime();
    differenceInTime = now-autoDisplayTime;
  }
}

function currentSlide(n){
  stopAutoAnimation();
  current = n;
  showSlides(0);
}

$(document).ready(function(){
  showSlidesAuto();
})

function showSlidesAuto(){
  if(doAuto){
    if(current+1>slides.length){
      current = 0;
    }
  
    if(current<0){
      current = slides.length;
    }
  
    for(var i=0; i < slides.length; i++){
      slides[i].style.display = "none";
    }
  
    for(i=0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace("active","");
    }

    dots[current].className += " active";
    slides[current].style.display = "block";
    current++;
    window.setTimeout(function(){
      showSlidesAuto()
    }, 5000);
  }
}

function showSlides(n){

  current+=n;
  if(current>slides.length-1){
    current = 0;
  }

  if(current<0){
    current = slides.length-1;
  }

  for(var i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  for(i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active","");
  }

  var images = document.querySelector('.images');
  var leffy = 
    parseInt(window.getComputedStyle(images)
      .getPropertyValue('left'));
  switch(current){
    case 0: leffy = -40;break;
    case 1: leffy = -60;break;
    case 2: leffy = -80;break;
    case 3: leffy = -100;break;
    case 4: leffy = -20;break;
  }
  if(differenceInTime > 3000){
    leffy+=20 * (parseInt(differenceInTime/3000)%5);
  }

  images.style.marginLeft = leffy+"%";
  slides[current].style.display = "block";
  dots[current].className += " active";
}
