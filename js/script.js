$(document).ready(function () {
  //animated on scroll initialization
  AOS.init();

  /* sticky navigation
  var headerBottomEl = $('.header .header__bottom');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 60) {
      headerBottomEl.addClass('header__bottom--sticky');
    } else {
      headerBottomEl.removeClass('header__bottom--sticky');
    }
  });
  */
  var header = $('.header');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      header.addClass('header__bg--lighter header--on-scroll');
    } else {
      header.removeClass('header__bg--lighter header--on-scroll');
    }
  });

  // navbar toggle function for mobile */
  var navTogglerBtnEl = $('.nav__button--toggler');
  var navMainMenuWrapperEl = $('.nav-main__mobile');
  var overlayBgEl = $('.header .nav__wrapper .nav__bg-overlay');
  navTogglerBtnEl.on('click', function () {
    $(document.body).addClass('body--no-scroll');
    navMainMenuWrapperEl.addClass('nav-main__mobile--active');
    overlayBgEl.addClass('nav__bg-overlay--active');
    if (overlayBgEl.hasClass('nav__bg-overlay--active')) {
      overlayBgEl.on('click', function () {
        $(document.body).removeClass('body--no-scroll');
        navMainMenuWrapperEl.removeClass('nav-main__mobile--active');
        overlayBgEl.removeClass('nav__bg-overlay--active');
      });
    }
  });
  //search form for mobile version
  var searchTriggerEl = $('.header .nav__wrapper .nav__button--mobile-search');
  var searchFormWrapperEl = $('.search-form__wrapper');
  var searchFormBtnCloseEl = $('.search-form__button--close');
  searchTriggerEl.on('click', function () {
    searchFormWrapperEl.addClass('search-form__wrapper--active');
    $(document.body).addClass('body--no-scroll');
    if (searchFormWrapperEl.hasClass('search-form__wrapper--active')) {
      searchFormBtnCloseEl.on('click', function () {
        $(document.body).removeClass('body--no-scroll');
        searchFormWrapperEl.removeClass('search-form__wrapper--active');
      });
    }
  });
  // sign in modal actions
  var btnDirectSignUpEl = $('.modal__sign-in .user-action__button--sign-up');
  var btnDirectSignInEl = $('.modal__sign-in .user-action__button--sign-in');
  var userActionWrapperEl = $('.modal__sign-in .user-action-wrapper');
  btnDirectSignUpEl.on('click', function () {
    userActionWrapperEl.addClass('user-action-wrapper--slide-left');
    if (userActionWrapperEl.hasClass('user-action-wrapper--slide-left')) {
      btnDirectSignInEl.on('click', function () {
        userActionWrapperEl.removeClass('user-action-wrapper--slide-left');
      });
    }
  });
  // back to login state after closing sign in modal
  $('#modalSignIn').on('hidden.bs.modal', function (event) {
    if (userActionWrapperEl.hasClass('user-action-wrapper--slide-left')) {
      userActionWrapperEl.removeClass('user-action-wrapper--slide-left');
    }
  });
  // adding classes to active pages
  var current = location.pathname;
  $('nav ul li a').each(function () {
    var $this = $(this);
    console.log(current);
    // we check comparison between current page and attribute redirection.
    if ($this.attr('href') === current) {
      $this.addClass('active');
    }
  });
  // hero section swiper
  var swiperHero = new Swiper('.swiper-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderCustom: function (swiper, current, total) {
        var names = [];
        $('.swiper-wrapper .swiper-slide').each(function (i) {
          names.push($(this).data('name'));
        });
        var text = '<ul>';
        for (let i = 1; i <= total; i++) {
          if (current == i) {
            text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
          } else {
            text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
          }
        }
        text += '</ul>';
        return text;
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // top rated tutor slider
  var swiperTutorTopRated = new Swiper('.swiper-top-rated-tutor', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    delay: 5000,
    pauseOnMouseEnter: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    pagination: false,
    /* If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderCustom: function (swiper, current, total) {
        var names = [];
        $('.swiper-wrapper .swiper-slide').each(function (i) {
          names.push($(this).data('name'));
        });
        var text = '<ul>';
        for (let i = 1; i <= total; i++) {
          if (current == i) {
            text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
          } else {
            text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
          }
        }
        text += '</ul>';
        return text;
      },
    },
    */
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // stat section counter
  var a = 0;
  $(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  });
  // testimonial section swiper
  var swiperHero = new Swiper('.testimonial-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    delay: 5000,
    pauseOnMouseEnter: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
    //If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderCustom: function (swiper, current, total) {
        var names = [];
        $('.swiper-wrapper .swiper-slide').each(function (i) {
          names.push($(this).data('name'));
        });
        var text = '<ul>';
        for (let i = 1; i <= total; i++) {
          if (current == i) {
            text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
          } else {
            text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
          }
        }
        text += '</ul>';
        return text;
      },
    },

    //Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // admin dashboard fluid
  var dashboardSidebarTogglerEl = $('.dashboard-wrapper .dashboard__sidebar--toggler');
  var dashboardSidebarEl = $('.dashboard-wrapper .dashboard__sidebar');
  var dashboardContentAreaEl = $('.dashboard-wrapper .dashboard__content-area');
  var dashboardTopbarEl = $('.dashboard-wrapper .dashboard__topbar');
  dashboardSidebarTogglerEl.on('click', function () {
    dashboardSidebarEl.toggleClass('dashboard__sidebar--shrinked');
    dashboardContentAreaEl.toggleClass('dashboard__content-area--fluid');
    dashboardTopbarEl.toggleClass('dashboard__topbar--fluid');
  });
});
