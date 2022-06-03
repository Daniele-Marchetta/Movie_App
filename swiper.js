const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
  
    autoplay: {
      delay: 5000,
    },
  
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: false,
  });
  
  const swiper2 = new Swiper(".swiper2", {
    direction: "horizontal",
    loop: false,
  
    //per sbuggarlo
    observer: true,
    observeParents: true,
  
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
  
    pagination: {
      el: ".swiper-pagination2",
      clickable: "true",
    },
  
    navigation: {
      nextEl: "#next",
      prevEl: "#prev",
    },
  
    breakpoints: {
      425: {
        slidesPerView: 3,
        spaceBetween: 17,
        slidesPerGroup: 1,
  
        loop:false,
        observer: true,
        observeParents: true,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 17,
        slidesPerGroup: 3,
  
        loop:false,
        observer: true,
        observeParents: true,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 17,
        slidesPerGroup: 3,
  
        loop:false,
        observer: true,
        observeParents: true,
      },
    },
  });
  
  const swiper3 = new Swiper(".swiper3", {
    direction: "horizontal",
    loop: false,
  
    observer: true,
    observeParents: true,
  
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
  
    pagination: {
      el: ".swiper-pagination3",
      clickable: "true",
    },
  
    navigation: {
      nextEl: "#next2",
      prevEl: "#prev2",
    },
  
    breakpoints: {
      425: {
        slidesPerView: 3,
        spaceBetween: 17,
        slidesPerGroup: 1,
  
        loop:false,
        observer: true,
        observeParents: true,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 17,
        slidesPerGroup: 3,
  
        loop:false,
        observer: true,
        observeParents: true,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 17,
        slidesPerGroup: 3,
  
        loop:false,
        observer: true,
        observeParents: true,
      },
    },
  });
  
  const swiper4 = new Swiper(".swiper4", {
    direction: "horizontal",
    loop: false,
  
    //per sbuggarlo
    observer: true,
    observeParents: true,
  
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
  
    pagination: {
      el: ".swiper-pagination2",
      clickable: "true",
    },
  
    navigation: {
      nextEl: "#next3",
      prevEl: "#prev3",
    },
  
    breakpoints: {
      425: {
        slidesPerView: 3,
        spaceBetween: 17,
        slidesPerGroup: 1,
  
        loop:false,
        observer: true,
        observeParents: true,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 17,
        slidesPerGroup: 3,
  
        loop:false,
        observer: true,
        observeParents: true,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 17,
        slidesPerGroup: 3,
  
        loop:false,
        observer: true,
        observeParents: true,
      },
    },
  });