import {BASE_URL} from "./config.js";


export const funzione = (s,type) => {
  const url = BASE_URL+"s="+s+"&type="+type;
  fetch(url)
    .then((response) => response.json())
    .then((prova) => {
      //console.table(prova)
      const oggetto = prova.Search;
      viewItems(oggetto);}
      );
};

const viewItems = (items) => {
  items.map((item) => {

    console.group(item.Title);
    console.log(item.Year);
    console.log(item.Poster);
    console.groupEnd();

  });
};

