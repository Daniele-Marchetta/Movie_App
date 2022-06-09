import { BASE_URL, CONTENT_TYPE, URL_YT_API, NoDisplay } from "./config.js";

const barra_di_ricerca = document.getElementById("cerca");
const riga = document.getElementById("riga");
const primapagina = document.getElementById("pp");

export const fetch_api = (s, type) => {
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
  const style_par =
    "text-overflow: ellipsis; overflow: hidden; white-space: nowrap; font-weight: bolder; background-color : rgba(0, 0, 0, .5); margin : 0px ; padding : 20px;";
  const style_slide = `background-image: url(${item.Poster});`;

  const slide = document.createElement("div");

  slide.addEventListener("click", () => {
    location.href = `./scheda.html?id=${item.imdbID}&title=${item.Title}`;
  });

  slide.className = "swiper-slide";

  if (item.Poster == "N/A") {
  } else {
    slide.style = style_slide;
  }

  const par = document.createElement("p");
  par.style = style_par;
  const node = document.createTextNode(item.Title);

  par.appendChild(node);
  slide.appendChild(par);

  return slide;
};

export const card_selezionata = () => {
  const querystring = window.location.search;
  if (querystring){
  const urlParams = new URLSearchParams(querystring);

  const id = urlParams.get("id");
  const titolo = urlParams.get("title");

console.log(titolo);
  if(titolo != "" && titolo != null){
console.log("qua");
    if(id){

      fetch_api_yt(titolo);
      fetch_api_by_id_title(id,titolo);
       
    }else{

      fetch_api_yt(titolo);
      fetch_api_by_id_title("",titolo);

    }
    
  }else{
    window.location.href="index.html";
  }


  

  }else{
    window.location.href="index.html";
  }
  
};

export const fetch_api_yt = async (s) => {
  const url = URL_YT_API + "&q=" + s + " trailer";
  try {
    const response = await fetch(url);
    const result = await response.json();
    viewItemsYt(await result.items[0].id.videoId);
  } catch (error) {
    console.log(error);
  }
};

const viewItemsYt = (oggetto) => {
  const iframe = (document.getElementById(
    "trailer"
  ).src = `https://www.youtube.com/embed/${oggetto}?autoplay=1`);
};

const fetch_api_by_id_title = (id ,title) => {
  const url = BASE_URL + "i=" + id +"&t=" + title;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      Filtraresult(result);
    });
};



const crea_scheda = (attr, valore) => {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  const label_element = document.createElement("label");
  label_element.className = "me-1";
  const node1 = document.createTextNode(attr + " : ");
  const span = document.createElement("span");
  const node2 = document.createTextNode(" " + valore);

  span.appendChild(node2);
  label_element.appendChild(node1);
  li.appendChild(label_element);
  li.appendChild(span);
  lista.appendChild(li);
};
const Filtraresult = (items) => {
  const style_poster = `background-image: url(${items.Poster}); background-repeat: no-repeat; background-size: cover; background-position: center;`;

  const Poster = document.getElementById("scheda_image");
  const trama = document.getElementById("trama");

  Poster.style = style_poster;

  trama.innerHTML = items.Plot;

  for (let attributi in items) {
    let tipo = typeof items[attributi];

    if (tipo.toString() != "object") {
      if (!NoDisplay.includes(attributi)) {
        crea_scheda(attributi, items[attributi]);
      }
    }
  }
};

export const fetch_api_searchbar = (s) => {
  const urls = `${BASE_URL}s=${s}`;
  console.log(urls);
  fetch(urls)
    .then((response) => response.json())
    .then((result) => {
      const oggetto = result.Search;
      if (oggetto != undefined) {
        viewItems_searchbar(oggetto);
      } else {
      }
    });
};

const viewItems_searchbar = (items) => {
  items.map((item) => {
    generacard_searchbar(item);
  });
};

const generacard_searchbar = (oggetto) => {
  const style_paragrafo =
    "color : white ;text-overflow: ellipsis; overflow: hidden; white-space: nowrap; font-weight: bolder; background-color : rgba(0, 0, 0, .5); margin : 0px ; padding : 20px;";
  const style_card_NA = `background-image: url(no-image.jpg); background-size : cover; background-position : center; height: 445px; width: 300px;`;
  const style_card = `background-image: url(${oggetto.Poster});  background-size : cover; background-position : center;height: 445px; width: 300px;`;

  const colonna = document.createElement("div");
  colonna.className = "col pt-5 pb-5 d-flex justify-content-center";
  const card = document.createElement("div");
  card.className = "card";

  const p = document.createElement("p");
  p.style = style_paragrafo;

  const textnode = document.createTextNode(oggetto.Title);
  if (oggetto.Poster == "N/A") {
    card.style = style_card_NA;
  } else {
    card.style = style_card;
  }
  card.addEventListener("click", () => {
    location.href = `./scheda.html?id=${oggetto.imdbID}&title=${oggetto.Title}`;
  });

  p.appendChild(textnode);
  card.appendChild(p);
  colonna.appendChild(card);
  riga.appendChild(colonna);
};

barra_di_ricerca.addEventListener("input", (e) => {
  if (barra_di_ricerca.value == "" || e.key == " ") {
  } else {
    let child = primapagina.lastElementChild;
    while (child) {
      primapagina.removeChild(child);
      child = primapagina.lastElementChild;
    }

    let child2 = riga.lastElementChild;
    while (child2) {
      riga.removeChild(child2);
      child2 = riga.lastElementChild;
    }

    fetch_api_searchbar(barra_di_ricerca.value);
  }
});
