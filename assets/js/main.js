// SHOW MENU MOBILE
const menuResponsive = {
  init: function () {
    this.showMenu();
    this.hiddenMenu();
  },
  showMenu: function () {
    const icon_bars = document.querySelector('.header_bottom .icon .fa-bars');
    const menu_mobile = document.querySelector('.menu_mobile');
    const icon_cog = document.querySelector('.icon_close_toggle');
    icon_bars.addEventListener('click', function () {
      menu_mobile.classList.add('show');
      icon_cog.classList.add('hidden');
    });
  },
  hiddenMenu: function () {
    const icon_times = document.querySelector('.fa-times');
    const icon_cog = document.querySelector('.icon_close_toggle');
    const menu_mobile = document.querySelector('.menu_mobile');
    icon_times.addEventListener('click', function () {
      menu_mobile.classList.remove('show');
      icon_cog.classList.remove('hidden');
    });
  },
};
menuResponsive.init();
// SHOW SUB MENU MOBILE
const subMenu = {
  init: function () {
    this.show_subMenu();
  },
  show_subMenu: function () {
    const icon_toggle = document.querySelector('.icon_toggle');
    const sub_menu = document.querySelector('.sub_menu');
    icon_toggle.addEventListener('click', function () {
      sub_menu.classList.toggle('active');
      icon_toggle.classList.toggle('change_content');
    });
  },
};
subMenu.init();

// WINDOW SCROLL HIDE MENU

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '54px';
  } else {
    document.getElementById('navbar').style.top = '-121px';
  }
  prevScrollpos = currentScrollPos;
};
//SHOW SELECTOR
var selector = {
  init: function () {
    this.show_selector();
  },
  show_selector: function () {
    var icon_cog = document.querySelector('.icon_close_toggle');
    var selector = document.querySelector('.selector');
    icon_cog.addEventListener('click', function () {
      selector.classList.toggle('active');
      icon_cog.classList.toggle('active');
    });
  },
};
selector.init();
//NUMBER AUTO INCREASE WHEN SCROLL TO COUNT NUMBER SECTION
jQuery(window).scroll(startCounter);

function startCounter() {
  var hT = jQuery('.count_item').offset().top,
    hH = jQuery('.count_item').outerHeight(),
    wH = jQuery(window).height();
  if (jQuery(window).scrollTop() > hT + hH - wH) {
    jQuery(window).off('scroll ', startCounter);
    jQuery('.number').each(function () {
      var $this = jQuery(this);
      jQuery({
        Counter: 0,
      }).animate(
        {
          Counter: $this.text(),
        },
        {
          duration: 2500,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          },
        }
      );
    });
  }
}
const SECONDS_PER_DAY = 86400;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MINUTE = 60;
// COUNTDOWN TIMER
function createTimer() {
  //var endTime = new Date("29 April 2018 9:56:00 GMT+01:00 ");
  let endTime = new Date('1 Nov 2022 08:00:00 GMT+0000 ');
  endTime = Date.parse(endTime) / 1000;

  let now = new Date();
  now = Date.parse(now) / 1000;

  let timeMaining = endTime - now;
  console.log(timeMaining);
  let days = timeMaining >= SECONDS_PER_DAY ? Math.floor(timeMaining / SECONDS_PER_DAY) : 0;
  timeMaining -= days * SECONDS_PER_DAY;

  let hours = timeMaining >= SECONDS_PER_HOUR ? Math.floor(timeMaining / SECONDS_PER_HOUR) : 0;
  timeMaining -= hours * SECONDS_PER_HOUR;

  let minutes =
    timeMaining >= SECONDS_PER_MINUTE ? Math.floor(timeMaining / SECONDS_PER_MINUTE) : 0;
  timeMaining -= minutes * SECONDS_PER_MINUTE;
  let seconds = timeMaining >= 0 ? timeMaining : 0;

  hours = `0${hours}`.slice(-2);
  minutes = `0${minutes}`.slice(-2);
  seconds = `0${seconds}`.slice(-2);
  const daysElement = document.querySelector('.days');
  const hoursElement = document.querySelector('.hours');
  const minutesElement = document.querySelector('.minutes');
  const secondsElement = document.querySelector('.seconds');

  hoursElement.innerHTML = `${hours}<span>HOURS</span>`;
  daysElement.innerHTML = `${days}<span>DAYS</span>`;
  minutesElement.innerHTML = `${minutes}<span>MINUTES</span>`;
  secondsElement.innerHTML = `${seconds}<span>SECONDS</span>`;
}
setInterval(createTimer, 1000);
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
    },
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
    },
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
    },
  },
});

// Handle hover link effect

window.addEventListener('load', () => {
  const linkList = document.querySelectorAll('.list_item>.list_link');
  if (!linkList) return;
  linkList.forEach((item) => {
    item.addEventListener('mouseenter', handleHoverLink);
  });
  const line = document.createElement('div');
  line.className = 'line-effect';
  document.body.appendChild(line);
  function handleHoverLink(event) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    const offsetBottom = 10;
    line.style.top = `${top + height / 2 + offsetBottom}px`;
  }
  const menu = document.querySelector('.menu');
  if (!menu) return;
  menu.addEventListener('mouseleave', () => {
    line.style.width = 0;
  });
});
