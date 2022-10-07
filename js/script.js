window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll(".art__btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".dropdown");
      let arrow = this.parentElement.querySelector(".art__arrow");
      let btnList = this.parentElement.querySelector(".art__list");
      document.querySelectorAll(".art__btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        };
      });
      document.querySelectorAll(".dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("dropdown--active");
        };
      });
      dropdown.classList.toggle("dropdown--active");
      btn.classList.toggle("active--btn");
      arrow.classList.toggle("art__arrow--active");
    });
  });
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".art__list")) {
      document.querySelectorAll(".dropdown").forEach(el => {
          el.classList.remove("dropdown--active");
      });
       document.querySelectorAll(".art__btn").forEach(el => {
          el.classList.remove("active--btn");
      })
      document.querySelectorAll(".art__arrow").forEach(el => {
        el.classList.remove("art__arrow--active");
      });
    };
  });
  const tabLinks = document.querySelectorAll('.tabs__link');
  tabLinks.forEach(item => { 
        item.addEventListener('click', (e) =>{
        tabLinks.forEach(el=> { 
          el.classList.remove('tabs__link--active'); 
          });
        item.classList.add('tabs__link--active');
    });
});
    const swiper = new Swiper('.swiper', {
        speed: 900,
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
    
        pagination: {
          clickable: true,
        },
      });
    const element = document.querySelector('#choices');
    const choices = new Choices(element, {
        searchEnabled:false,
        shouldSort:false          
    });
    const swiper2 = new Swiper('.gallery__swiper', {
      speed: 700,
      loop: false,
      navigation: {
        nextEl: '.gallery__button-next',
        prevEl: '.gallery__button-prev',
      },
      pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
      },
      breakpoints: {
        320: {
          slidesPerGroup: 1,
          slidesPerView: 1,
        },
        600: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 38,
        },
        769: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
          
        },
        1920: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
        }
      }
    });
    $( function() {
      $( ".accordion" ).accordion({
        active: 0,
        collapsible: true,
        heightStyle: "content",
      });
    } );
    document.querySelectorAll('.tabs__link').forEach(function (tabLink) {
      tabLink.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path;
        document.querySelectorAll('.painters__item').forEach(function (tabContent) {
          tabContent.classList.remove('painters__item_active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('painters__item_active');
      });
    });


    const swiper3 = new Swiper('.events__swiper', {
      speed: 600,
      loop: false,
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.events-next',
        prevEl: '.events-prev',
      },
      pagination: {
        el: '.events__pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 12,
        },
        567: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        1024: {
          spaceBetween: 27,
          slidesPerGroup: 3,
          slidesPerView: 3 ,
        },
        1920: {
          spaceBetween: 50,
          slidesPerGroup: 1,
          slidesPerView: 3,
        }
      }
    });
    tippy('#tooltip1', {
      content: "Пример современных тенденций - современная методология разработки",
      allowHTML: true,
      theme: 'myTheme',
    });
    tippy('#tooltip2', {
      content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции ",
      theme: 'myTheme',
    });
    tippy('#tooltip3', {
      content: "В стремлении повысить качество",
      theme: 'myTheme',
    });
    const swiper4 = new Swiper('.projects__swiper', {
      speed: 700,
      loop: false,
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
      navigation: {
        nextEl: '.partners__btn-next',
        prevEl: '.partners__btn-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 21,
        },
        480: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 21,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
        1920: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      }
    });
    const slides = document.querySelectorAll('.swiper-slide.partners__slide.swiper-slide-next')
    window.matchMedia('(max-width: 767px)').addListener( function (e) {
      if (e.matches) {
        document.querySelector('.fields__number').classList.add('fields__number--active');
        slides.forEach((el) => {
          el.classList.add('partners__slide--break');
        });
      }
      else {
        document.querySelector('.fields__number').classList.remove('fields__number--active');
        slides.forEach((el) => {
          el.classList.remove('partners__slide--break');
        });
      };
    });
    window.matchMedia('(max-width: 1023px)').addListener( function (e) {
      if (e.matches) {
        document.querySelector('.contacts__form').classList.add('contacts__form--active')
      }
      else {
        document.querySelector('.contacts__form').classList.remove('contacts__form--active')
      }
    });
    window.matchMedia('(max-width: 910px)').addListener( function (e) {
      if (e.matches) {
        document.querySelector('.gallery__right').classList.add('gallery__right--active')
      }
      else {
        document.querySelector('.gallery__right').classList.remove('gallery__right--active')
      }
    });
    window.matchMedia('(max-width: 360px)').addListener( function (e) {
      if (e.matches) {
        document.querySelector('.field').classList.add('field--break');
        document.querySelector('.fields__btn').classList.add('fields__btn--break');
        document.querySelector('.field-tel').classList.add('field-tel--break');
      }
      else {
        document.querySelector('.field').classList.remove('field--break');
        document.querySelector('.fields__btn').classList.remove('fields__btn--break');
        document.querySelector('.field-tel').classList.remove('field-tel--break');
      }
    });
    ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.758468, 37.601088],
                zoom: 14, 
            })
            myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {
            hintContent: 'Место где мы находимся',
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'metka.svg',
            iconImageSize: [30, 30],
            iconImageOffset: [0, 0]
        })
        myMap.geoObjects.add(myPlacemark);
     };


     document.querySelector('.accordion__header--active').addEventListener('click', function() {
      this.classList.toggle('tab__link_active__arrow');
      this.classList.toggle('arrow--active');
    });

     let tabs = document.querySelectorAll('.accordion__header');
     for (let tab of tabs) {
       tab.addEventListener('click', function(e) {
         tab.classList.toggle('arrow--active');
       });
     };
     let tabItems = document.querySelectorAll('.accordion__item');
     for (let tabItem of tabItems) {
       tabItem.addEventListener('click', function() {
         tabItem.classList.toggle('accordion__item--active');
       });
     };


    const btns = document.querySelectorAll('.gallery__slide');
    const modalOverlay = document.querySelector('.modal-overlay ');
    const modals = document.querySelectorAll('.modal');
    body = document.body

    let disableScroll = function () {
      let pagePosition = window.scrollY;
      document.body.classList.add('disable-scroll');
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
    }

    let enableScroll = function () {
      let pagePosition = parseInt(document.body.dataset.position, 10);
      document.body.style.top = 'auto';
      document.body.classList.remove('disable-scroll');
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute('data-position');
    }

    btns.forEach((el) => {
      el.addEventListener('click', (e) => {
        disableScroll();
        let path = e.currentTarget.getAttribute('data-popup');
        modals.forEach((el) => {
          el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-modal="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
      });
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target == modalOverlay) {
        enableScroll();
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
          el.classList.remove('modal--visible');
        });
      }
    });
    modalClose = document.querySelectorAll('.modal__close-btn');

    modalClose.forEach((el) => {
      el.addEventListener('click', (e) => {
        enableScroll();
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
          el.classList.remove('modal--visible');
        });
      })
    }
    )

    document.querySelector('.burger__line').addEventListener('click', function() {
      document.body.classList.toggle('disable-scroll');
    });
});

/* 1024 px */ 

document.querySelector('.header__search-btn').addEventListener('click', function() {
  document.querySelector('.form-hidden__search').classList.add('search--active');
  document.querySelector('.header__search').classList.add('header__search--active');
  document.querySelector('.form-hidden__close').classList.add('form-hidden__close-active');
  document.querySelector('.form-hidden').classList.add('search-top--active');
});
document.querySelector('.form-hidden__close').addEventListener('click', function() {
  this.classList.remove('form-hidden__close-active');
  document.querySelector('.form-hidden__search').classList.remove('search--active');
  document.querySelector('.header__search').classList.remove('header__search--active');
  document.querySelector('.form-hidden').classList.remove('search-top--active');
});
document.querySelector('.burger__line').addEventListener('click', function() {
  document.querySelector('.header__main').classList.toggle('header__main--active');
  document.querySelector('.burger__line').classList.toggle('burger__line--active');
});

const form = document.querySelector('.contacts__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

new window.JustValidate('.contacts__form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },
  colorWrong: '#ff0f0f',
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов'
    },
    email: {
      email: 'Введите корректный email',
      required: 'Введите email'
    },
    tel: {
      required: 'Введите телефон',
      function: 'Здесь должно быть 10 символов без +7'
    }
  },
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Данные отправлены');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
})