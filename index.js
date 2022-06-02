import { BASE_URL, CONTENT_TYPE } from "./config.js";

let swiper = new Swiper(".swiper", {
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

let swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: false,

  //per sbuggarlo
  observer: true,
  observeParents: true,

  slidesPerView: 3,
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
    750: {
      slidesPerView: 6,
      spaceBetween: 17,
      slidesPerGroup: 3,

      loop:false,
      observer: true,
      observeParents: true,
    },
  },
});

let swiper3 = new Swiper(".swiper3", {
  direction: "horizontal",
  loop: false,

  observer: true,
  observeParents: true,

  slidesPerView: 3,
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
    750: {
      slidesPerView: 6,
      spaceBetween: 17,
      slidesPerGroup: 1,

      loop:false,
      observer: true,
      observeParents: true,
    },
  },
});

let swiper4 = new Swiper(".swiper4", {
  direction: "horizontal",
  loop: false,

  //per sbuggarlo
  observer: true,
  observeParents: true,

  slidesPerView: 3,
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
    750: {
      slidesPerView: 6,
      spaceBetween: 17,
      slidesPerGroup: 2,

      loop:false,
      observer: true,
      observeParents: true,
    },
  },
});

const funzione = (s, type) => {
  const url = BASE_URL + "s=" + s + "&type=" + type + "&page=1";
  fetch(url)
    .then((response) => response.json())
    .then((prova) => {
      const oggetto = prova.Search;
      viewItems(oggetto);
    });
};

const viewItems = (items) => {
  items.map((item) => {
    const card_generica = generacard(item);
    creacard_specifica(card_generica, item.Type);
  });
};

const creacard_specifica = (item, tipo) => {
  if (tipo == CONTENT_TYPE.MOVIE) {
    let div = document.querySelector(".swiper2");
    let card = div.querySelector(".swiper-wrapper");
    card.appendChild(item);
  }

  if (tipo == CONTENT_TYPE.SERIES) {
    let div = document.querySelector(".swiper3");
    let card = div.querySelector(".swiper-wrapper");
    card.appendChild(item);
  }

  if (tipo == CONTENT_TYPE.GAME) {
    let div = document.querySelector(".swiper4");
    let card = div.querySelector(".swiper-wrapper");
    card.appendChild(item);
  }
};

const generacard = (item) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  if (item.Poster == "N/A") {
   
  } else {
    slide.style = `background-image: url(${item.Poster}); `;
  }

  const par = document.createElement("p");
  par.style =
    "text-overflow: ellipsis; overflow: hidden; white-space: nowrap; font-weight: bolder; background-color : rgba(0, 0, 0, .5); margin : 0px ; padding : 20px;";

  const node = document.createTextNode(item.Title);

  par.appendChild(node);
  slide.appendChild(par);

  return slide;
};

funzione("Avengers", CONTENT_TYPE.MOVIE);
funzione("Looney Tunes", CONTENT_TYPE.SERIES);
funzione("avengers", CONTENT_TYPE.GAME);
