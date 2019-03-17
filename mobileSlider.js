var autoDisplayTime = new Date().getTime();
var differenceInTime;
function plusSlides(n){
  if(doAuto){
    doAuto = false;
  
    document.querySelector('.images').style.animationPlayState = "paused";
    current--;
    var now = new Date().getTime();
    differenceInTime = now-autoDisplayTime;
  }
  showSlides(n);
}

function currentSlide(n){
  if(doAuto){
    doAuto = false;
  
    document.querySelector('.images').style.animationPlayState = "paused";
    current--;
    var now = new Date().getTime();
    differenceInTime = now-autoDisplayTime;
  }
  current = n;
  showSlides(0);
}

$(document).ready(function(){
  showSlidesAuto();
})

var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var current=3;
var doAuto = true;
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
  
    slides[current].style.display = "block";
    current++;
    window.setTimeout(function(){
      showSlidesAuto()
    }, 3000);
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
  var st = window.getComputedStyle(images);

  var leffy = parseInt(st.getPropertyValue('left'));
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
  dots[current].className += " active";}
