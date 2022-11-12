import axios from "axios";

export const fetchCharacters = async () => {
  const res1 = await axios
    .get("https://swapi.dev/api/people?page=1")
    .then((res) => res.data.results);
  const res2 = await axios
    .get("https://swapi.dev/api/people?page=2")
    .then((res) => res.data.results);
  const res3 = await axios
    .get("https://swapi.dev/api/people?page=3")
    .then((res) => res.data.results);
  const res4 = await axios
    .get("https://swapi.dev/api/people?page=4")
    .then((res) => res.data.results);
  const res5 = await axios
    .get("https://swapi.dev/api/people?page=5")
    .then((res) => res.data.results);
  const res6 = await axios
    .get("https://swapi.dev/api/people?page=6")
    .then((res) => res.data.results);
  const res7 = await axios
    .get("https://swapi.dev/api/people?page=7")
    .then((res) => res.data.results);
  const res8 = await axios
    .get("https://swapi.dev/api/people?page=8")
    .then((res) => res.data.results);

  return Promise.all([res1, res2, res3, res4, res5, res6, res7, res8]).then(
    (values) => values.flat()
  );
};
