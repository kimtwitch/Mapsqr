$(document).ready(function () {
    "use strict";
    //herf=# disable ==
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });
    
    //mobile nav
    $('#main_nav_btn').click(function () {
        if ($('#main_nav').hasClass('main_nav_open')) {
            $('#main_nav').removeClass('main_nav_open');
            $('body').removeClass('noscroll');
        } else {
            $('#main_nav').addClass('main_nav_open');
            $('body').addClass('noscroll');
        }
    });
    $('#main_nav li:not(:last-child)').click(function () {
        $('#main_nav_btn').click();
    });
    var lastScrollTop = 0;
    $(document).scroll(function (e) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('.main_header').addClass('hide_header');
            $('.main_nav').addClass('hide_header');
        } else {
            $('.main_header').removeClass('hide_header');
            $('.main_nav').removeClass('hide_header');
        }
        lastScrollTop = st;
    });
    //======
        
	//smooth scroll====
    $("a[href*=#]").click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=this.hash.slice(1)]');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500, "easeOutCubic");
                return false;
            }
        }
    });
    //===================
});