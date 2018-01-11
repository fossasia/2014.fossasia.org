$(document).ready(function() {

	"use strict";

    /************** Nav Scripts **************/
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1) {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    });

    $('a').click(function() {
        if ($(this).attr('href') === '#') {
            return false;
        }
    });

    // Margin on the menu to make room for sidebar menu if it exists
    if ($('.sidebar-menu-toggle').length && !$('.sidebar-menu-toggle i').hasClass('variant-deleted-mrv')) {
        $('nav').find('.menu').css('margin-right', 32);
    }

    // Mobile menu toggle
    $('.mobile-menu-toggle').click(function() {
        $('nav').toggleClass('open-menu');
    });

    // Sidebar menu toggle
    $('.sidebar-menu-toggle').click(function() {
        if ($('.instagram-sidebar').hasClass('show-sidebar')) {
            $('.instagram-sidebar').toggleClass('show-sidebar');
            $('.sidebar-menu').toggleClass('show-sidebar');
        } else {
            $('.sidebar-menu').toggleClass('show-sidebar');
            $('.main-container').toggleClass('reveal-sidebar');
            $('nav .container').toggleClass('reveal-sidebar');
        }
    });

    $('.main-container').click(function() {
        if ($('.sidebar-menu').hasClass('show-sidebar')) {
            $('.sidebar-menu').toggleClass('show-sidebar');
            $('.main-container').toggleClass('reveal-sidebar');
            $('nav .container').toggleClass('reveal-sidebar');
        }
    });

    // Lazy Load
    $("img").unveil(200);

});
