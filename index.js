const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 5000,
      },

    pagination: {
      el: '.swiper-pagination',
    },
    navigation:false
  });

  const swiper2 = new Swiper('.swiper2', {

    direction: 'horizontal',
    loop: true,


    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,

    pagination: {
      el: '.swiper-pagination2',
      clickable:"true"
    },

    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    },

    breakpoints: {
      750: {
        slidesPerView: 6,
        spaceBetween: 17,
        slidesPerGroup: 2
      
    }

  }
  });

  const swiper3 = new Swiper('.swiper3', {

    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,

    pagination: {
      el: '.swiper-pagination3',
      clickable:"true"
    },

    navigation: {
      nextEl: '#next2',
      prevEl: '#prev2',
    },

    breakpoints: {
      750: {
        slidesPerView: 6,
        spaceBetween: 17,
        slidesPerGroup: 2
      
    }

  }
  });

  const swiper4 = new Swiper('.swiper4', {

    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,

    pagination: {
      el: '.swiper-pagination2',
      clickable:"true"
    },

    navigation: {
      nextEl: '#next3',
      prevEl: '#prev3',
    },

    breakpoints: {
      750: {
        slidesPerView: 6,
        spaceBetween: 17,
        slidesPerGroup: 2
      
    }

  }
  });

