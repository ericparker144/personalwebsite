// Close mobile navigation ("Menu" dropdown) when a link clicked
$('.nav a').click(function () {
    $('.navbar-collapse').collapse('hide');
});

// Fix scrolling issue on touch screens
$('body').on({
    'touchmove': function (e) {
        collapseNavbar();
        toTopButton();
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 40
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

//#to-top button appears after scrolling

function toTopButton() {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
            // $('#to-top').css({position:'fixed', display:'block'});
            $('#to-top').show("slow", function () {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function () {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
};

var fixed = false;
$(document).scroll(toTopButton);

function scrollToProj (proj) {
    $('#' + proj + '-scroll').click();
}

//Show/Hide Projects
$(".project1").click({ param1: "project1" }, showHideProj);
$(".project2").click({ param1: "project2" }, showHideProj);

function showHideProj(event) {

    if ($('#' + event.data.param1 + 'content').is(":visible")) {
        $('#' + event.data.param1 + 'content').slideUp(1000);
    }
    else {
        $('#' + event.data.param1 + 'content').slideDown(1000, function () {
            scrollToProj(event.data.param1);
        });
        
    }

}

//, function () {

//    $('html, body').stop().animate({
//        scrollTop: this.offset().top
//    }, 1500, 'easeInOutExpo');

//}