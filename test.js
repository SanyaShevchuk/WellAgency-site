// let line = document.querySelector('.line');

// let slides = document.querySelectorAll('.pic');
// let offset = 0;
// let sliderWidth = document.querySelector('.slider').offsetWidth;
// let step=0;
// let widthArray = [0];
// let lineWidth = 0;
// let rest = 0;
// for (let i = 0; i < slides.length; i++) {
//     widthArray.push(slides[i].offsetWidth);
//     lineWidth+=slides[i].offsetWidth;
// }
// line.style.width = lineWidth + "px";

// document.getElementById('Page_4').onclick = function(){
//     rest = lineWidth - sliderWidth - (offset+widthArray[step]);
//     if(rest>=0){
//         offset = offset + widthArray[step];
//         line.style.left = -offset+"px";
//     }
//     else{
//         line.style.left = -(lineWidth-sliderWidth)+"px";
//         offset = 0;
//         step = -1;
//     }

//     if(step+1 == slides.length){
//         step=0;
//         offset=0;
//     } else{
//         step++;
//     }
// }
// var frame = document.querySelector('.fr-trust-wrapper');
// frame.innerHTML = `<div class="images">${frame.innerHTML + frame.innerHTML}</div>`;
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex+=n);
}

function currentSlide(n){
  showSlides(slideIndex=n);
}
showSlidesAuto();

function showSlidesAuto(){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  n=1;
  while(true){
    setTimeout(function(){
      if(n>slides.length){
        slideIndex = 1;
      }
    
      if(n<1){
        slideIndex = slides.length;
      }
    
      for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
      }
    
      for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
      }
      
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }, 3000);
    
  
};

}
// function showSlides(n){
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");

//   if(n>slides.length){
//     slideIndex = 1;
//   }

//   if(n<1){
//     slideIndex = slides.length;
//   }

//   for(i=0; i < slides.length; i++){
//     slides[i].style.display = "none";
//   }

//   for(i=0; i < dots.length; i++){
//     dots[i].className = dots[i].className.replace("active","");
//   }
  
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
