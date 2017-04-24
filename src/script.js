var scss = require('./styles/style.scss');
import "jQuery";

// timeline slider

var timelineSlider = $('.timeline-slider');

console.log(timelineSlider[0].value);

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