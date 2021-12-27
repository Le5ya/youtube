const mySwiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    }, 
    800: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});
const mySwiper_ = new Swiper('.channel-slider_', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
    breakpoints: {
    1600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 2
    } 
   
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next_',
    prevEl: '.channel-button-prev_',
  },

});
const mySwiper__ = new Swiper('.channel-slider__', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
    breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    }, 
    800: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next__',
    prevEl: '.channel-button-prev__',
  },

});
const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('clock', ()=> {
  mobileSearch.classList.toggle('is-open');
});
if(document.documentElement.scrollWidth <= 640) {
  mySwiper.destroy();
  mySwiper_.destroy();
  mySwiper__.destroy();
}