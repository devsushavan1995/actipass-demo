$(document).ready(function () {
  //animated on scroll initialization
  AOS.init();

  // sticky navigation
  var headerBottomEl = $('.header .header__bottom');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 60) {
      headerBottomEl.addClass('header__bottom--sticky');
    } else {
      headerBottomEl.removeClass('header__bottom--sticky');
    }
  });

  // navbar toggle function for mobile */
  var navTogglerBtnEl = $('.nav__button--toggler');
  var navMainMenuWrapperEl = $('.nav-main__mobile');
  var overlayBgEl = $('.header .nav__wrapper .bg__overlay');
  navTogglerBtnEl.on('click', function () {
    navMainMenuWrapperEl.addClass('nav-main__mobile--active');
    overlayBgEl.addClass('bg__overlay--active');
    if (overlayBgEl.hasClass('bg__overlay--active')) {
      overlayBgEl.on('click', function () {
        navMainMenuWrapperEl.removeClass('nav-main__mobile--active');
        overlayBgEl.removeClass('bg__overlay--active');
      });
    }
  });
  //search form for mobile version
  var searchTriggerEl = $('.header .nav__wrapper .nav__button--mobile-search');
  var searchFormWrapperEl = $('.header .nav__wrapper .search-form__wrapper');
  var searchFormBtnCloseEl = $('.header .nav__wrapper .search-form__button--close');
  searchTriggerEl.on('click', function () {
    searchFormWrapperEl.addClass('search-form__wrapper--active');
    if (searchFormWrapperEl.hasClass('search-form__wrapper--active')) {
      searchFormBtnCloseEl.on('click', function () {
        searchFormWrapperEl.removeClass('search-form__wrapper--active');
      });
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
        slidesPerView: 3,
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
