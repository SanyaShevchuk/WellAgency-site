$(document).ready(function() {

    $('.landing_text h1').animated("fadeInUp", "fadeOutDown");
    $('.landing_text p').animated("fadeInDown", "fadeInUp");
    $('.service h1').animated("fadeInUp", "fadeOutDown");
    $('.service p').animated("fadeInDown", "fadeInUp");
    $('.service_item li').animated('fadeInLeft', "fadeOutLeft");
    $('.slider_name').animated("fadeInUp");
    $('.slider_description').animated("fadeInDown");
    $('.next').on('click', function () {
        $('.slider_name').animated("fadeInUp");
        $('.slider_description').animated("fadeInDown");
    });
    $('.registration p').animated("fadeInUp", "fadeOutDown");
    $('.box_input').animated('bounceInLeft', "fadeOutLeft");
    $('.input_lable').animated("fadeInUp", "fadeOutDown");
    // $('.gradient').animated('fadeInLeft', "fadeOutLeft");
    $('.btn_and_grad').animated('flipInX', "flipOutX");
    $('.well_big_text').animated('lightSpeedIn', 'lightSpeedOut');
    // $('.well_big_text').animated('shake', 'shake');

});

$('.mySlides').on('change',function () {
    $('.slider_name').animated("fadeInUp");
    $('.slider_description').animated("fadeInDown");
});

var Emblem = {
    init: function(el, str) {
        var element = document.querySelector(el);
        var text = str ? str : element.innerHTML;
        element.innerHTML = '';
        for (var i = 0; i < text.length; i++) {
            var letter = text[i];
            var span = document.createElement('span');
            var node = document.createTextNode(letter);
            var r = (360/text.length)*(i);
            var x = (Math.PI/text.length).toFixed(0) * (i);
            var y = (Math.PI/text.length).toFixed(0) * (i);
            span.appendChild(node);
            span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
            span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
            element.appendChild(span);
        }
    }
};

Emblem.init('.emblem');