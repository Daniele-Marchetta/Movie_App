import {BASE_URL} from "./config.js";


export const funzione = (s,type) => {
  const url = BASE_URL+"s="+s+"&type="+type;
  fetch(url)
    .then((response) => response.json())
    .then((prova) => console.table(prova));
};

