const baseURL = "https://rickandmortyapi.com/api/";

export const getCharacters = (page) => {
  const url = "character/?page=";
  return new Promise((resolve, reject) => {
    fetch(baseURL + url + page)
      .then((res) => res.json())
      .then((result) => {
        resolve(result.results);
      });
  });
};

export const getLocations = (page) => {
  const url = "location/?page=";
  return new Promise((resolve, reject) => {
    fetch(baseURL + url + page)
      .then((res) => res.json())
      .then((result) => {
        resolve(result.results);
      });
  });
};
