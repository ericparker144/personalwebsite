// Close mobile navigation ("Menu" dropdown) when a link clicked
$('.dropdown-menu li a').click(function () {
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
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".dropdown-menu").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".dropdown-menu").removeClass("top-nav-collapse");

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

function scrollToProj(proj) {
    // Uncomment to enable scrolling to each project after each has been presented
    //$('#' + proj + '-scroll').click();
    return;
}

//Show/Hide Projects
$(".project1").click({ param1: "project1" }, showHideProj);
$(".project2").click({ param1: "project2" }, showHideProj);
$('#project1-hide').click({ param1: "project1" }, showHideProj);
$('#project2-hide').click({ param1: "project2" }, showHideProj);

function showHideProj(event) {

    if ($('#' + event.data.param1 + 'content').is(":visible")) {
        $('#' + event.data.param1 + 'content').slideUp(1000);
        $('#' + event.data.param1 + '-show').text('Learn More');
    }
    else {
        $('#' + event.data.param1 + 'content').slideDown(1000, function () {
            scrollToProj(event.data.param1);
        });
        $('#' + event.data.param1 + '-show').text('Hide Project Details');
        $('#' + event.data.param1 + '-scroll').click();

    }

}

// function to automatically update the year in the copyright
var date = new Date();
$('#copyright').append('Copyright &copy; EngineeringEric.com ' + date.getFullYear());

//, function () {

//    $('html, body').stop().animate({
//        scrollTop: this.offset().top
//    }, 1500, 'easeInOutExpo');

//}

//$('.navbar .dropdown').hover(function () {
//    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
//}, function () {
//    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
//})

//$(document).ready(function () {
//    $('.dropdown').on('mouseenter mouseleave click tap', function () {

//        //if ($(this).hasClass('open')) {
//        //    console.log('true');
//        //    $(this).removeClass('open');
//        //}
//        //else {
//        //    $(this).addClass('open');
//        //}
//        $(this).toggleClass("open");
//    });
//});