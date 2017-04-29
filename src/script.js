var scss = require('./styles/style.scss');
import "jQuery";
import "./vendor/smoothstate/jquery.smoothState.min.js";

$(function() {


function fn(){
    
    //so font awesome can be recognised
var scss = require('./styles/style.scss');

    //nav menu
$('.menu-icon').on('click', function (){
    $(this).toggleClass('hamburger cross');
    $('.overlay').toggleClass('overlay--show');
});

// close nav menu
$('.nav-item a').on('click', function (){
    $('.overlay').toggleClass('overlay--show');
    $('.menu-icon').toggleClass('hamburger cross');
})


//parralx footer

var footerParaHeight = $(".footer").height();
$(".content").css("margin-bottom",footerParaHeight);

// timeline slider

var timelineSlider = $('.timeline-slider');

// console.log(timelineSlider[0].value);

function timeline() {

    let value = timelineSlider[0].value;
    console.log(value)

    switch (value) {
        case '4':
            $('.timeline-card').css("display", "none");
            $('.timeline-card-four').fadeIn();

            break;
        case '3':
            $('.timeline-card').css("display", "none");
            $('.timeline-card-three').fadeIn();

            break;
        case '2':
            $('.timeline-card').css("display", "none");
            $('.timeline-card-two').fadeIn();

            break;
        case '1':
            $('.timeline-card').css("display", "none");
            $('.timeline-card-one').fadeIn();

            break;
        case '0':
            $('.timeline-card').css("display", "none");
            $('.timeline-card-zero').fadeIn();

            break;

    }
}

timelineSlider.on('change', timeline);
timelineSlider.on('oninput', timeline);


//portfolio filter

$(".filter").click(function () {
    $('.filter').removeClass('filter-active');
    $(this).addClass('filter-active');
    var selectedClass = $(this).attr("data-filter");
    $(".portfolio-row").fadeTo(1000);
    $(".portfolio-item").not(selectedClass).fadeOut();
    setTimeout(function () {
        $(selectedClass).fadeIn();
    }, 250);

});


//contact form

$('#name').on('keyup focus', function (e) {

    if (this.value == '') {
        $(this).prev().removeClass('form-label--show');

    }
    else {
        $(this).prev().addClass('form-label--show');
    }
});

$('#email').on('keyup focus', function (e) {

    if (this.value == '') {
        $(this).prev().removeClass('form-label--show');

    }
    else {
        $(this).prev().addClass('form-label--show');
    }
});

$('#message').on('keyup focus', function (e) {

    if (this.value == '') {
        $(this).prev().removeClass('form-label--show');

    }
    else {
        $(this).prev().addClass('form-label--show');
    }
})

}
// end of fn

fn();



//smoothstate

var options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 250, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');

        // Inject the new content
        $container.html($newContent);

      }
    },
      onAfter: function($container, $newContent) {
      fn();
  }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');

});
