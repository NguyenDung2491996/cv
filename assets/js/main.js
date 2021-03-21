// SHOW MENU MOBILE
var menuResponsive = {
    init: function() {
        this.showMenu();
        this.hiddenMenu();
    },
    showMenu: function() {
        var icon_bars = document.querySelector(".header_bottom .icon .fa-bars");
        var menu_mobile = document.querySelector(".menu_mobile");
        var icon_cog = document.querySelector(".icon_close_toggle");
        icon_bars.addEventListener('click', function() {
            menu_mobile.classList.add('show');
            icon_cog.classList.add("hidden");
        });
    },
    hiddenMenu: function() {
        var icon_times = document.querySelector(".fa-times");
        var icon_cog = document.querySelector(".icon_close_toggle");
        var menu_mobile = document.querySelector(".menu_mobile");
        icon_times.addEventListener('click', function() {
            menu_mobile.classList.remove("show");
            icon_cog.classList.remove("hidden");
        });
    }
}
menuResponsive.init();
// SHOW SUB MENU MOBILE
var subMenu = {
    init: function() {
        this.show_subMenu();
    },
    show_subMenu: function() {
        var icon_toggle = document.querySelector(".icon_toggle");
        var sub_menu = document.querySelector(".sub_menu");
        icon_toggle.addEventListener('click', function() {
            sub_menu.classList.toggle("active");
            icon_toggle.classList.toggle("change_content");
        });

    }
}
subMenu.init();


// WINDOW SCROLL HIDE MENU


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "54px";
        } else {
            document.getElementById("navbar").style.top = "-121px";
        }
        prevScrollpos = currentScrollPos;
    }
    //SHOW SELECTOR 
var selector = {
    init: function() {
        this.show_selector();
    },
    show_selector: function() {
        var icon_cog = document.querySelector(".icon_close_toggle");
        var selector = document.querySelector(".selector");
        icon_cog.addEventListener("click", function() {
            selector.classList.toggle("active");
            icon_cog.classList.toggle("active");
        })
    }
}
selector.init();
//NUMBER AUTO INCREASE WHEN SCROLL TO COUNT NUMBER SECTION
jQuery(window).scroll(startCounter);

function startCounter() {
    var hT = jQuery('.count_item').offset().top,
        hH = jQuery('.count_item').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT + hH - wH) {
        jQuery(window).off("scroll ", startCounter);
        jQuery('.number').each(function() {
            var $this = jQuery(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 2500,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}
// COUNTDOWN TIMER
function makeTimer() {

    //var endTime = new Date("29 April 2018 9:56:00 GMT+01:00 ");	
    var endTime = new Date("1 Nov 2021 08:00:00 GMT+0000 ");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10 ") {
        hours = "0 " + hours;
    }
    if (minutes < "10 ") {
        minutes = "0 " + minutes;
    }
    if (seconds < "10 ") {
        seconds = "0 " + seconds;
    }

    $(".days ").html(days + "<span>DAYS</span>");
    $(".hours").html(hours + "<span>HOURS</span>");
    $(".minutes").html(minutes + "<span>MINUTES</span>");
    $(".seconds").html(seconds + "<span>SECONDS</span>");
}
setInterval(function() {
    makeTimer();
}, 1000);
//CAROUSEL COURSE SECTION


$('.course').owlCarousel({
    nav: true,

    loop: true,
    margin: 15,
    responsiveClass: true,
    autoplay: true,
    dots: false,

    responsive: {
        0: {
            items: 1,


        },
        575: {
            items: 2,


        },
        768: {
            items: 3,


        },
        1000: {
            items: 4,



        }
    },

});
//CAROUSEL STORY SECTION

$('#team').owlCarousel({
    nav: false,

    loop: true,
    margin: 15,
    responsiveClass: true,
    autoplay: true,
    dots: true,

    responsive: {
        0: {
            items: 1,
        },

        1024: {
            items: 2,
        }
    },

});

//CAROUSEL LOGO SECTION
$('#logo').owlCarousel({
    nav: false,

    loop: true,
    margin: 15,
    responsiveClass: true,
    autoplay: true,
    dots: false,

    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 6,
        }

    },

});
//MAGIC LINE
$(function() {
    // them phan tu #magic-line vao cuoi #navigation
    $(".header_bottom .menu .list_menu").append("<li id='magic-line'></li>");

    var $magicLine = $("#magic-line");

    $magicLine
    // chiều rộng magicline bằng chiều rộng phần tử .current
        .width($(".header_bottom .menu>.list_menu .current").width())
        // thuộc tính left của margicline bằng vị trí left của phần tử .current a
        .css("left", $(".header_bottom .menu .list_menu  .current a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $(".header_bottom .menu>.list_menu>.list_item").find(".list_link").hover(
        function() {
            // lấy vị trí và chiều rộng của phần tử được hover
            var leftPos = $(this).position().left;
            var newWidth = $(this).parent().width();

            // animate tới phần tử được hover
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            });
        },
        function() {
            $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth")
            });
        }
    ); // end hover   
}); // end ready