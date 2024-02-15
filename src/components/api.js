import axios from "axios";

const API_KEY = "cd5043849cc0f0f4c828dd0f3a5bb818";
const API_BASE_URL = "https://api.themoviedb.org/3";
axios.defaults.baseURL = API_BASE_URL;

export const getFilms = async ({ search }) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
  const options = {
    params: {
      accept: "application/json",
      api_key: API_KEY,
    },
  };

  const response = await axios.get(url, options);

  return response.data.results;
};

export const getFilmsId = async (id) => {
  const response = await axios.get(`movie/${id}`, {
    params: { api_key: API_KEY, language: "en-US" },
  });

  return response.data;
};

export const getFilmsCast = async (id) => {
  const response = await axios.get(`movie/${id}/credits`, {
    params: { api_key: API_KEY, language: "en-US" },
  });

  return response.data;
};
export const getFilmsReviews = async (id) => {
  const response = await axios.get(`movie/${id}/reviews`, {
    params: { api_key: API_KEY, language: "en-US" },
  });

  return response.data;
};

export const getTrendingFilms = async (abortController) => {
  const response = await axios.get("trending/movie/day", {
    params: { api_key: API_KEY, language: "en-US" },
    signal: abortController.signal,
  });

  return response.data.results;
};
