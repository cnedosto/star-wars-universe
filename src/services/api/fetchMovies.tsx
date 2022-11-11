import axios from "axios";

export const fetchMovies = async () => {
  return await axios
    .get("https://swapi.dev/api/films")
    .then((res) => res.data.results);
};
