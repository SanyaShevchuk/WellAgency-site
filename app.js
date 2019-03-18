let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let current=3;
let doAuto = true;

function plusSlides(n){
  stopAutoAnimation();
  showSlides(n);
}

function stopAutoAnimation(){
  if(doAuto){
    doAuto = false;
    document.querySelector('.images').style.animationPlayState = "paused";
    current--;
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
    changeSlide();
    current++;
    window.setTimeout(function(){
      showSlidesAuto()
    }, 5000);
  }
}

function showSlides(n){
  current+=n;
  changeSlide();
}

function changeSlide(){
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

  let images = document.querySelector('.images');
  let leffy = 
    parseInt(window.getComputedStyle(images)
      .getPropertyValue('left'));
  switch(current){
    case 0: leffy = -40;break;
    case 1: leffy = -60;break;
    case 2: leffy = -80;break;
    case 3: leffy = -100;break;
    case 4: leffy = -20;break;
  }
 
  images.style.marginLeft = leffy+"%";
  slides[current].style.display = "block";
  dots[current].className += " active";
}