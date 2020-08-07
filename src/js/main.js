var swiper = new Swiper("#testimonials_teachers", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper("#testimonials_campus", {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper("#testimonials_blog", {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper("#testimonials_students", {
  slidesPerView: 1,
  spaceBetween: 40,
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper("#testimonials_gallery", {
  slidesPerView: 1,
  spaceBetween: 40,
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper("#testimonials_stories", {
  slidesPerView: 1,
  spaceBetween: 40,
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper("#gallery", {
  slidesPerView: 'auto',
  autoHeight: true,  
  spaceBetween: 30,
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    769: {
      autoHeight: false, 
    },
  },
});

/* JS needed only for demo */

$(document).ready(function () {
  /* code for navbar */
  $(".toggleClass").on("click tap", function () {
    navbarMagic();
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      navbarMagic();
    } // esc
  });

  function navbarMagic() {
    $(".left-side").toggleClass("showNav hideNav").removeClass("hidden");
  }

  /* toggle classes for demo main span */
  $(".item, .item a").click(function () {
    var current = $(this);
    $(current).addClass("item-active");
    $(".item, .item a").not(current).removeClass("item-active");
    var newClass = $(this).text();
    var p = $(".element");
    $(".text-con span").removeAttr("class");
    setTimeout(function () {
      $(".text-con span").addClass(newClass);
    }, 100);
  });

  /* smooth scroll for nav links */
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 100,
            },
            1000
          );
          return false;
        }
      }
    });
  });
});

//hamburger icon animation
$("document").ready(function () {
  var Closed = false;

  $(".hamburger").click(function () {
    if (Closed == true) {
      $(this).removeClass("open");
      $(this).addClass("closed");
      Closed = false;
    } else {
      $(this).removeClass("closed");
      $(this).addClass("open");
      Closed = true;
    }
  });
});

AOS.init();

//scroll to top

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//call to action

const callToAction = document.querySelector("#call_to_action");
const icon = document.querySelector("#call_to_action > i ");
const callToActionDetails = document.querySelector("#call_to_action_details");

const callUs = document.querySelector("#call_us");
const dialUs = document.querySelector("#dial_us");
const callBack = document.querySelector("#call_back");
const enterNumber = document.querySelector("#enter_number");
const succesfull = document.querySelector("#succesfull");

function displayCallToAction() {
  if (callToActionDetails.classList.contains("hidden")) {
    callToActionDetails.classList.remove("hidden");
    icon.classList.add("im", "im-x-mark", "text-2xl");
    icon.classList.remove("fa", "fa-headset", "text-4xl");
  } else {
    icon.classList.add("fa", "fa-headset", "text-4xl");
    icon.classList.remove("im", "im-x-mark", "text-2xl");
    callToActionDetails.classList.add("hidden");
    succesfull.classList.add("hidden");
    dialUs.classList.add("hidden");
    enterNumber.classList.add("hidden");
    callUs.classList.remove("hidden");
  }
}

callToAction.addEventListener("click", displayCallToAction);



function displayDialUs() {
  if (dialUs.classList.contains("hidden")) {
    dialUs.classList.remove("hidden");
    callUs.classList.add("hidden");
  }
}
function displayEnterNumber() {
  if (enterNumber.classList.contains("hidden")) {
    enterNumber.classList.remove("hidden");
    dialUs.classList.add("hidden");
  }
}
function displaySuccesfull() {
  if (succesfull.classList.contains("hidden")) {
    succesfull.classList.remove("hidden");
    enterNumber.classList.add("hidden");
  }
  setTimeout(function () {
    succesfull.classList.add("hidden");
    callUs.classList.remove("hidden");
  }, 3000);
}
callUs.addEventListener("click", displayDialUs);
callBack.addEventListener("click", displayEnterNumber);
enterNumber.addEventListener("click", displaySuccesfull);

// blog view all
const viewButton = document.querySelector("#view_button");
const viewAll = document.querySelectorAll("#view_all");

function displayBlogs() {
  console.log("clicked");
  for (var i = 0; i < viewAll.length + 1; i++) {
    if (viewAll[i].classList.contains("hidden")) {
      viewAll[i].classList.remove("hidden");
      viewButton.innerHTML = "View Less";
    } else {
      viewAll[i].classList.add("hidden");
      viewButton.innerHTML = "View All";
    }
  }
}
viewButton.addEventListener("click", displayBlogs);
