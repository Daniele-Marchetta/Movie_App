import { BASE_URL, CONTENT_TYPE ,URL_YT_API,NoDisplay} from "./config.js";



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
  const slide = document.createElement("div");
  
  slide.addEventListener('click', () => 
{
  location.href = `./scheda.html`;
  sessionStorage.setItem('1', item.Title);
});

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

export const card_selezionata = () => {
  if (!sessionStorage.getItem('1')){
    location.href="./index.html";
  }else{
    fetch_api_yt(sessionStorage.getItem('1'));
    fetch_api_by_title(sessionStorage.getItem('1'));
  }
}

export const fetch_api_yt = (s) => {
  const url = URL_YT_API + "&q=" +s+" trailer";
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      viewItemsYt(result.items[0].id.videoId);
    });
  }


const viewItemsYt = (oggetto) => {
   const iframe = document.getElementById("trailer").src=`https://www.youtube.com/embed/${oggetto}?autoplay=1`;
 }

 const fetch_api_by_title = (titolo)=>{
  const url = BASE_URL + "t=" + titolo;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      Filtraresult(result);
    });
 }

 const crea_scheda = (attr,valore) =>{

const lista = document.getElementById("lista");
const li = document.createElement("li");
const label_element= document.createElement("label");
label_element.className="me-1";
const node1= document.createTextNode(attr+" : ");
const span = document.createElement("span");
const node2= document.createTextNode(" "+valore);

span.appendChild(node2);
label_element.appendChild(node1);
li.appendChild(label_element);
li.appendChild(span);
lista.appendChild(li);


 }
 const Filtraresult = (items) => {

  const Poster = document.getElementById("scheda_image");
  const trama = document.getElementById("trama");

  Poster.style=`background-image: url(${items.Poster}); `;
  
  trama.innerHTML=items.Plot;
    
    for (let attributi in items){

      let tipo = typeof(items[attributi]);
      
      if(tipo.toString()!="object"){
        if(!NoDisplay.includes(attributi)){
          crea_scheda(attributi,items[attributi]);
        }
        
    }
  }
    
 }








  




