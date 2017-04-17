var scss = require('./styles/style.scss');
import "jQuery";

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
