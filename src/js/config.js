const API_KEY ="fa602d3f";
const API_KEY_YT="AIzaSyCynZjApeI-v7HP7OQihimUyCQWRgC1k2g";
export const NoDisplay = ["Poster", "Response", "DVD" ,"BoxOffice","Production", "Website" , "Type" ,"imdbID", "Metascore" ,"Awards" ,"Plot" ,"Rated" ,"imdbVotes"];


export const BASE_URL=`https://www.omdbapi.com/?apikey=${API_KEY}&`;
export const URL_YT_API=`https://youtube.googleapis.com/youtube/v3/search?q=Stranger%20things%20trailer&key=${API_KEY_YT}`;


export const CONTENT_TYPE={
    MOVIE:"movie",
    SERIES:"series",
    EPISODE: "episode",
    GAME: "game"
}