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
  slidesPerView: 2,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
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



var openmodal = document.querySelectorAll('.modal-open')
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener('click', function(event){
    	event.preventDefault()
    	toggleModal()
      })
    }
    
    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)
    
    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', toggleModal)
    }
    
    document.onkeydown = function(evt) {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
    	isEscape = (evt.key === "Escape" || evt.key === "Esc")
      } else {
    	isEscape = (evt.keyCode === 27)
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
    	toggleModal()
      }
    };
    
    
    function toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }




    //call to action 

    const callToAction = document.querySelector("#call_to_action");
    const callToActionDetails = document.querySelector("#call_to_action_details");

    function displayCallToAction(){
      if(callToActionDetails.classList.contains('invisible')){
        callToActionDetails.classList.remove('invisible');                
      }else{
        callToActionDetails.classList.add('invisible');        
      }
    } 

    callToAction.addEventListener("click", displayCallToAction);
    