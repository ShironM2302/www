var scss = require('./styles/style.scss');
import "jQuery";

import {TweenMax, TimelineMax} from 'gsap';

import * as ScrollMagic from 'scrollmagic';

import "./vendor/smoothstate/jquery.smoothState.min.js";

$(function() {


function fn(){

    var master = new TimelineMax()
        // .add(mainBanner())
        // .add(leftBanner())
        // .add(rightBanner())
        .add(centerBanner());

function mainBanner(){
        var main = new TimelineMax({
        // repeat:-1
    });

    main
    .to('.hero-title',1.5,{
        ease: Power0.easeNone,
        y:10,
        autoAlpha:1
    });

    return main;

}

function leftBanner(){

    var left = new TimelineMax({
        // repeat:-1
    });

    left.set('.f-ball--left',{
        left:'15%',
        top:'15%',
        autoAlpha:0
    })
    .to('.f-ball--left',1,{
        autoAlpha:1
    })
    .to('.f-ball--left',1,{
        top:'90%',
        ease:Circ.easeOut
    })
    .to('.f-ball--left',0.15,{
        scaleX:1.5,
        scaleY:0.6
    })
    .to('.f-ball--left',.5,{
        scaleX:1,
        scaleY:1,
        top:'0%',
        y:0,
        left:0,
        autoAlpha:0.35,
        ease:Circ.easeOut
    })
    .to('.f-ball--left',1.2,{
        ease: Power0.easeNone,
        borderRadius:'0',
        width:'100%',
        height:'10vh'                
    })
    .set('.f-ball--left',{
        borderRadius:'0',
        width:'100%',
        height:'10vh'                
    })
    .to('.trait-one',1.2,{
        ease: Power0.easeNone,
        autoAlpha:1  
    });

    return left;
}
   
function rightBanner(){

    var heightBox = $('.hero-info').height();
    var widthBox = $('.hero-info').width();
    var leftBox = $('.hero-info').position().left;
    
    
    var right = new TimelineMax({
        // repeat:-1
    });

    right.set('.f-ball--right',{
        left:'85%',
        top:'15%',
        autoAlpha:0
    })
    .to('.f-ball--right',1,{
        autoAlpha:1
    })
    .to('.f-ball--right',1,{
        top:'90%',
        ease:Circ.easeOut
    })
    .to('.f-ball--right',0.15,{
        scaleX:1.5,
        scaleY:0.6
    })
    .to('.f-ball--right',1,{
        scaleX:1,
        scaleY:1,
        top:'30%',
        left:'50%',
        autoAlpha:0.35,
        // x:'-12.5rem',
        ease:Circ.easeOut
    })
    .to('.f-ball--right',.1,{
        clearProps:'left',
        ease:Circ.easeOut
    })
    .to('.f-ball--right',1,{
        className: 'f-box',
        borderRadius:0,
        ease: Circ.easeOut
    })
    .to('.dash-one',1.2,{
        ease: Power0.easeNone,
        autoAlpha:1  
    })
    .to('.trait-two',1.2,{
        ease: Power0.easeNone,
        autoAlpha:1  
    });

    return right;

}

function centerBanner(){

    var center = new TimelineMax({
        // repeat:-1
    });

    center.set('.f-ball--center',{
        left:'50%',
        xPercent:-50,
        top:'15%',
        autoAlpha:0
    })
    .to('.f-ball--center',1,{
        autoAlpha:1
    })
    .to('.f-ball--center',1,{
        top:'90%',
        ease:Circ.easeOut
    })
    .to('.f-ball--center',0.2,{
        scaleX:1.5,
        scaleY:0.6
    })
    .to('.f-ball--center',.2,{
        scaleX:1,
        scaleY:1,
        autoAlpha:0.35,
        ease:Circ.easeOut
    })
    // .to('.f-ball--center',.2,{
    //     top:'85%',
    //     ease:Circ.easeOut
    // })
    // .to('.f-ball--center',.2,{
    //     top:'90%',
    //     ease:Circ.easeOut
    // })
    .to('.f-ball--center',.1,{
        // clearProps:'transform',
        ease:Circ.easeOut
    })
    .to('.f-ball--center',.5,{
        className: 'f-circle',
        ease: Circ.easeOut
    })
    .to('.arrow-block-hero',.25,{
        y:-10,
    })
    .to('.arrow-block-hero',.25,{
        ease: Power0.easeNone,
        y:0,
        autoAlpha:1
    })
    .to('.dash-two',1.2,{
        ease: Power0.easeNone,
        autoAlpha:1  
    })
    .to('.trait-three',1.2,{
        ease: Power0.easeNone,
        autoAlpha:1  
    });


    return center;

}
   




    
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
});

//form sending
  // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-msg');

    // Set up an event listener for the contact form.
$(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
var formData = $(form).serialize();

console.log(formData);

// Submit the form using AJAX.
$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
})
.done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    // $(formMessages).removeClass('error');
    // $(formMessages).addClass('success');

    // Set the message text.
    $(formMessages).text(response);

    // Clear the form.
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
})

});


//back link on projects pages
$('.back-link').on('click', function(e) {
    e.preventDefault();
    window.history.back();
})

}
// end of fn

fn();



//smoothstate
var options = {
    prefetch: true,
    cacheLength: 2,
    blacklist: 'form',
    onStart: {
      duration: 500, // Duration of our animation
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

                // Scroll user to the top
        $('html, body').animate({ 'scrollTop': 0 });

      }
    },
      onAfter: function($container, $newContent) {
      fn();
  }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');

});
