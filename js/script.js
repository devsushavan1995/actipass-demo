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
  var header = $(".header");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      header.addClass("header__bg--lighter header--on-scroll");
    } else {
      header.removeClass("header__bg--lighter header--on-scroll");
    }
  });

  // navbar toggle function for mobile */
  var navTogglerBtnEl = $(".nav__button--toggler");
  var navMainMenuWrapperEl = $(".nav-main__mobile");
  var overlayBgEl = $(".header .nav__wrapper .nav__bg-overlay");
  navTogglerBtnEl.on("click", function () {
    $(document.body).addClass("body--no-scroll");
    navMainMenuWrapperEl.addClass("nav-main__mobile--active");
    overlayBgEl.addClass("nav__bg-overlay--active");
    if (overlayBgEl.hasClass("nav__bg-overlay--active")) {
      overlayBgEl.on("click", function () {
        $(document.body).removeClass("body--no-scroll");
        navMainMenuWrapperEl.removeClass("nav-main__mobile--active");
        overlayBgEl.removeClass("nav__bg-overlay--active");
      });
    }
  });
  //search form for mobile version
  var searchTriggerEl = $(".header .nav__wrapper .nav__button--mobile-search");
  var searchFormWrapperEl = $(".search-form__wrapper");
  var searchFormBtnCloseEl = $(".search-form__button--close");
  searchTriggerEl.on("click", function () {
    searchFormWrapperEl.addClass("search-form__wrapper--active");
    $(document.body).addClass("body--no-scroll");
    if (searchFormWrapperEl.hasClass("search-form__wrapper--active")) {
      searchFormBtnCloseEl.on("click", function () {
        $(document.body).removeClass("body--no-scroll");
        searchFormWrapperEl.removeClass("search-form__wrapper--active");
      });
    }
  });
  // sign in modal actions
  var btnDirectSignUpEl = $(".modal__sign-in .user-action__button--sign-up");
  var btnDirectSignInEl = $(".modal__sign-in .user-action__button--sign-in");
  var userActionWrapperEl = $(".modal__sign-in .user-action-wrapper");
  btnDirectSignUpEl.on("click", function () {
    userActionWrapperEl.addClass("user-action-wrapper--slide-left");
    if (userActionWrapperEl.hasClass("user-action-wrapper--slide-left")) {
      btnDirectSignInEl.on("click", function () {
        userActionWrapperEl.removeClass("user-action-wrapper--slide-left");
      });
    }
  });
  // back to login state after closing sign in modal
  $("#modalSignIn").on("hidden.bs.modal", function (event) {
    if (userActionWrapperEl.hasClass("user-action-wrapper--slide-left")) {
      userActionWrapperEl.removeClass("user-action-wrapper--slide-left");
    }
  });

  // hero section swiper
  var swiperHero = new Swiper(".swiper-hero", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderCustom: function (swiper, current, total) {
        var names = [];
        $(".swiper-wrapper .swiper-slide").each(function (i) {
          names.push($(this).data("name"));
        });
        var text = "<ul>";
        for (let i = 1; i <= total; i++) {
          if (current == i) {
            text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
          } else {
            text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
          }
        }
        text += "</ul>";
        return text;
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // top rated tutor slider
  var swiperTutorTopRated = new Swiper(".swiper-top-rated-tutor", {
    // Optional parameters
    direction: "horizontal",
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // vendor about slider
  var swiperVendorAbout = new Swiper(".swiper-vendor-about", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true,
    delay: 5000,
    pauseOnMouseEnter: true,
    slidesPerView: 1,
    spaceBetween: 10,
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // stat section counter
  var a = 0;
  $(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 3000,
            easing: "swing",
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
  var swiperHero = new Swiper(".testimonial-swiper", {
    // Optional parameters
    direction: "horizontal",
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
      el: ".swiper-pagination",
      clickable: true,
      renderCustom: function (swiper, current, total) {
        var names = [];
        $(".swiper-wrapper .swiper-slide").each(function (i) {
          names.push($(this).data("name"));
        });
        var text = "<ul>";
        for (let i = 1; i <= total; i++) {
          if (current == i) {
            text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
          } else {
            text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
          }
        }
        text += "</ul>";
        return text;
      },
    },

    //Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // admin dashboard fluid
  var dashboardSidebarTogglerEl1 = $("#dashboardSidebarToggler1");
  var dashboardSidebarTogglerEl2 = $("#dashboardSidebarToggler2");
  var dashboardSidebarEl = $(".dashboard-wrapper .dashboard__sidebar");
  var dashboardContentAreaEl = $(".dashboard-wrapper .dashboard__content-area");
  var dashboardTopbarEl = $(".dashboard-wrapper .dashboard__topbar");
  var dashboardOverlayEl = $(".dashboard-wrapper .dashboard__overlay");
  // console.log(dashboardOverlayEl);
  dashboardSidebarTogglerEl1.on("click", dashboardToggling);
  dashboardSidebarTogglerEl2.on("click", dashboardToggling);

  function dashboardToggling() {
    dashboardOverlayEl.addClass("dashboard__overlay--active");
    dashboardSidebarEl.toggleClass("dashboard__sidebar--shrinked");
    dashboardContentAreaEl.toggleClass("dashboard__content-area--fluid");
    dashboardTopbarEl.toggleClass("dashboard__topbar--fluid");
    if (dashboardOverlayEl.hasClass("dashboard__overlay--active")) {
      if (window.innerWidth < 992) {
        $("body").addClass("body--no-scroll");
      }
      dashboardOverlayEl.on("click", function () {
        $(this).removeClass("dashboard__overlay--active");
        dashboardSidebarEl.removeClass("dashboard__sidebar--shrinked");
        $("body").removeClass("body--no-scroll");
      });
    }
  }

  // toggle buttons for select activity
  //$('input.cb-value').prop("checked", true);
  $(".cb-value").click(function () {
    var mainParent = $(this).parent(".toggle-button");
    if ($(mainParent).find("input.cb-value").is(":checked")) {
      $(mainParent).addClass("toggle-button--active");
    } else {
      $(mainParent).removeClass("toggle-button--active");
    }
  });
  // adding active class to nav links as per page
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $("ul a").each(function () {
    if (this.href === path) {
      $("ul a").removeClass("active");
      $(this).addClass("active");
    }
  });

  // load more button for market place course page
  var showOnPageload = 6; // set the number of course will shown on page load
  var afterButtonClickLoad = 3; // number of courses on load more button click
  $(".market-place-wrapper .course-container").slice(0, showOnPageload).show();
  $("#courseButtonLoadMore").on("click", courseLoading);
  function courseLoading(e) {
    // click event for load more
    e.preventDefault();
    $("#courseButtonLoadMore .spinner-border").removeClass("d-none");
    setTimeout(function () {
      $(".market-place-wrapper .course-container:hidden").slice(0, afterButtonClickLoad).show();
      $("#courseButtonLoadMore .spinner-border").addClass("d-none");
    }, 1500);
    if ($(".market-place-wrapper .course-container:hidden").length == 0) {
      $(this).removeClass("d-flex").addClass("d-none");
    }
  }

  // Schedule calender for showing events on date
  $("#scheduleCalenderContainer").simpleCalendar({
    disableEmptyDetails: true,
    events: [
      {
        startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),

        endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),

        summary: "Spanish Learning Class",
      },
    ],
    onDateSelect: function (date, events) {
      //console.log(events.length);
      if (events.length > 0) {
        $("#showEventModal").modal("show");
      }
    },
  });

  // booking course slider
  var swiperHero = new Swiper(".booking-courses-swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: false,
    delay: 5000,
    pauseOnMouseEnter: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    pagination: false,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   renderCustom: function (swiper, current, total) {
    //     var names = [];
    //     $('.swiper-wrapper .swiper-slide').each(function (i) {
    //       names.push($(this).data('name'));
    //     });
    //     var text = '<ul>';
    //     for (let i = 1; i <= total; i++) {
    //       if (current == i) {
    //         text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
    //       } else {
    //         text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
    //       }
    //     }
    //     text += '</ul>';
    //     return text;
    //   },
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // datepicker for add child date of birth input
  $("#addChildDatePicker")
    .datepicker({
      showOn: "both",
      dateFormat: "dd-mm-yy",
    })
    .next("button")
    .button({
      icons: {
        primary: "ui-icon-calendar",
      },
      text: false,
    });

  // // Data Picker Initialization
  // $('.datepicker').datepicker();

  // $('.date-trigger').on('focus', function () {
  //   console.log($(this));
  //   $('.fa-calendar').click();
  // });
  $(".onepassDatepicker")
    .datepicker({
      showOn: "both",
      dateFormat: "dd-mm-yy",
    })
    .next("button")
    .button({
      icons: {
        primary: "ui-icon-calendar",
      },
      text: false,
    });

  // forum like button
  $(".engagement__button--like").click(function () {
    $(this).toggleClass("is-active");
  });

   // datepicker for add child date of birth input
   $("#selectBatchDatePicker")
   .datepicker({
     showOn: "both",
     dateFormat: "dd-mm-yy",
   })
   .next("button")
   .button({
     icons: {
       primary: "ui-icon-calendar",
     },
     text: false,
   });

  // story swiper
  var swiperTutorTopRated = new Swiper(".story-swiper", {
    // Optional parameters
    direction: "horizontal",
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
        slidesPerView: 4,
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //check if collapsible is shown
  $(".courses__filter-container.collapse").on("shown.bs.collapse", function () {
    //then check if there was a click
    var collpasedBlock = $("#filterCollapseBlock");
    $("body").click(function (e) {
      if (!collpasedBlock.is(e.target) && collpasedBlock.has(e.target).length === 0) {
        $(".courses__filter-container.collapse").collapse("hide");
      }
    });
  });
  // dashboard home tabs by select options
  // //hide all tabs first
  // $('.dashboard__content-home .tab-content').hide();
  // //show the first tab content
  // $('#tab-1').show();

  // $('#select-box').change(function () {
  //   dropdown = $('#select-box').val();
  //   //first hide all tabs again when a new option is selected
  //   $('.dashboard__content-home  .tab-content').hide();
  //   //then show the tab content of whatever option value was selected
  //   $('#' + 'tab-' + dropdown).show();
  // });
  // add story custom file button
  $('.story__heading-upload-story input[type="file"]').each(function () {
    // get label text
    var label = $(this).parents(".form-group").find("label").text();
    label = label ? label : "Upload File";

    // wrap the file input
    $(this).wrap('<div class="input-file"></div>');
    // display label
    $(this).before('<span class="btn"><span class="bi bi-upload ml-1"></span></span>');
    // we will display selected file here
    $(this).before('<span class="file-selected"></span>');

    // file input change listener
    $(this).change(function (e) {
      // Get this file input value
      var val = $(this).val();

      // Let's only show filename.
      // By default file input value is a fullpath, something like
      // C:\fakepath\Nuriootpa1.jpg depending on your browser.
      var filename = val.replace(/^.*[\\\/]/, "");

      // Display the filename
      $(this).siblings(".file-selected").text(filename);
    });
  });

  // Open the file browser when our custom button is clicked.
  $(".story__heading-upload-story .input-file .btn").click(function () {
    $(this).siblings('input[type="file"]').trigger("click");
  });

  // Chart js for child progress
  var ctx = $("#childName1Progress");
  var ctx2 = $("#childName2Progress");
  var childName1Progress = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  var childName1Progress = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  $('.chat-message-form input[type="file"]').each(function () {
    // get label text
    var label = $(this).parents(".form-group").find("label").text();
    label = label ? label : "Upload File";

    // wrap the file input
    $(this).wrap('<div class="input-file"></div>');
    // display label
    $(this).before('<span class="btn"><i class="bi bi-image"></i></span>');
    // we will display selected file here
    $(this).before('<span class="file-selected"></span>');

    // file input change listener
    $(this).change(function (e) {
      // Get this file input value
      var val = $(this).val();

      // Let's only show filename.
      // By default file input value is a fullpath, something like
      // C:\fakepath\Nuriootpa1.jpg depending on your browser.
      var filename = val.replace(/^.*[\\\/]/, "");

      // Display the filename
      $(this).siblings(".file-selected").text(filename);
    });
  });

  // Open the file browser when our custom button is clicked.
  $(".chat-message-form .input-file .btn").click(function () {
    $(this).siblings('input[type="file"]').trigger("click");
  });

  // chat messagebox control
  $("#messageboxSidebar a").on("click", function () {
    $("#messagebox").addClass("messagebox--slide-left");
    if ($("#messagebox").hasClass("messagebox--slide-left")) {
      $("#chatBackButton").on("click", function () {
        $("#messagebox").removeClass("messagebox--slide-left");
      });
    }
  });
});
