import axios from "axios";

export const fetchImages = async () => {
  return await axios
    .get(
      "https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json"
    )
    .then((res) => res.data);
};
