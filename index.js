const url = "https://www.omdbapi.com/?apikey=fa602d3f&t=terminator&y=2012";

const url2= "https://www.omdbapi.com/?apikey=fa602d3f&s=terminator"

const url3= "https://www.omdbapi.com/?apikey=fa602d3f&s=terminator&type=series"

export const funzione = () => {
  fetch(url)
    .then((response) => response.json())
    .then((prova) => console.table(prova));
};

export const funzione2 = () => {
    fetch(url2)
      .then((response) => response.json())
      .then((prova) => {
          const movies = prova.Search;
          console.table(movies)}
          );
  };

  export const funzione3 = () => {
    fetch(url3)
      .then((response) => response.json())
      .then((prova) => {
          const movies = prova.Search;
          console.table(movies)}
          );
  };
