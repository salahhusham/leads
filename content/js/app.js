/* syntax window scroll js*/
let sole = document.getElementById("myElement");
window.onscroll = function() {
    var scroll = window.scrollY || window.scrollTop;
    if (scroll > 0) {
        sole.classList.add("scrolled");
    } else {
        sole.classList.remove("scrolled");
    }
};
/* swiper---js part-1*/

var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed:5000,
    autoplay: {
      delay: 2000,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },

  });
  /* syntax end swiper js part-1*/

  /* start syntax  swiper js part-2*/
  var swiper_brand = new Swiper(".mySwipers", {
   
    speed: 5000,
    loop:true,
    autoplay: {
      delay:1,
      disableOnInteraction: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992:{
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  });
  let scrollTop = document.getElementById("scrolltop");
scrollTop && (scrollTop.addEventListener("click", (function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})))
  $(window).scroll(function () {
    let windiowTop = $(window).scrollTop();
    if (windiowTop > 300) {
      $('#scrolltop').fadeIn(500);
    } else {
      $('#scrolltop').fadeOut(500);
    }
  });

  var swiper = new Swiper(".mySwiperr", {
    loop: true,
    speed: 6000,
    autoplay: {
      delay:1,
      disableOnInteraction: true
    },
    breakpoints: {
      320:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      450:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      576:{
        slidesPerView: 2.5,
        spaceBetween: 1,
      },
      768:{
        slidesPerView: 3.5,
        spaceBetween: 5,
      },
     992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
/** start syntax swiper par-3 page-about me**/
var swiper = new Swiper(".swier", {
  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/** end syntax swiper par-3 page-about me**/

/** start syntax swiper-model par-4 page-index**/
var swiper = new Swiper(".mySwip", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
/** end syntax swiper-model par-4 page-index**/
var swiper = new Swiper(".myiper", {
  
  loop:true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
   
    450:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768:{
      slidesPerView: 4,
      spaceBetween: 10,
    },
   992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1260:{
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1261:{
      slidesPerView: 6,
      spaceBetween: 15,
    },
    1400: {
      spaceBetween: 15,
      slidesPerView: 6,
    },
  },
 
});
/** start syntax swiper par-5 page-product**/

var swiper = new Swiper(".ySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper3", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
/** end syntax swiper par-5 page-product**/

let lists = document.getElementsByClassName("list-header");
let list = document.getElementsByClassName("main-haeder")[0];

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function () {
    list.classList.toggle("hide-header");
})}














let bsket = document.getElementsByClassName("salla");

for (let i = 0; i < bsket.length; i++) {
  bsket[i].onclick = function() {
    this.classList.toggle("salla-icon");
  };
}

let herts = document.getElementsByClassName("heart");

for (let i = 0; i < herts.length; i++) {
  herts[i].onclick = function() {
    this.classList.toggle("hart-icon");
  };
}



let hearts = document.getElementsByClassName("hart-fill");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].onclick = function() {
    this.classList.toggle("icon-hart");
  };
}
var counter = function(){
  if(jQuery('.number').length)
  {
    jQuery('.number').counterUp({
      delay: 10,
      time: 3000
    });	
  }}


//   /** start synatx quantity-cart shop **/
function wcqib_refresh_quantity_increments() {
  jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
      var c = jQuery(b);
      c.addClass("buttons_added");
      c.children().first().before('<input type="button" value="-" class="minus" />');
      c.children().last().after('<input type="button" value="+" class="plus" />');
  });
}

String.prototype.getDecimals || (String.prototype.getDecimals = function() {
  var a = this,
      b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0;
});

jQuery(document).ready(function() {
  wcqib_refresh_quantity_increments();
});

jQuery(document).on("updated_wc_div", function() {
  wcqib_refresh_quantity_increments();
});

jQuery(document).on("click", ".plus, .minus", function() {
  var a = jQuery(this).closest(".quantity").find(".qty"),
      b = parseFloat(a.val()),
      c = parseFloat(a.attr("max")),
      d = parseFloat(a.attr("min")),
      e = a.attr("step");
  b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1);
  jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals()));
  a.trigger("change");
});

var minSlider = document.getElementById("minRange");
var maxSlider = document.getElementById("maxRange");
var minOutput = document.getElementById("minValue");
var maxOutput = document.getElementById("maxValue");

minOutput.innerHTML = minSlider.value;
maxOutput.innerHTML = maxSlider.value;

minSlider.oninput = function() {
  minOutput.innerHTML = this.value;
};

maxSlider.oninput = function() {
  maxOutput.innerHTML = this.value;
};

  /* end synatx range*/



