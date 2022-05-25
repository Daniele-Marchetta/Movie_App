const url = "https://www.omdbapi.com/?apikey=fa602d3f&t=terminator&y=2012";

export const funzione = () => {
  fetch(url)
    .then((response) => response.json())
    .then((prova) => console.log(prova.Released));
};
