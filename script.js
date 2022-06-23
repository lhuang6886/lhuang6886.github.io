// JavaScript source code
var words = ['Elemental Transmogrification'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
        }
        $('.word').text(part);
        console.log(part)
    }, speed);
};

$(document).ready(function () {
    wordflick();
});

$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        menu: '#myMenu'
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
});