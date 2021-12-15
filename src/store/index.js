import { createStore } from "vuex";
import axios from "axios";

const baseUrl = "https://api.jikan.moe/v4";

export default createStore({
  state: {
    topAnimes: [],
    topTvAnimes: [],
    topMovieAnimes: [],
  },
  mutations: {
    setTopAnimes(state, data) {
      state.topAnimes = data;
    },
    setTopTvAnimes(state, data) {
      state.topTvAnimes = data;
    },
    setTopMovieAnimes(state, data) {
      state.topMovieAnimes = data;
    },
  },
  actions: {
    async getTopAnimeList(context) {
      let data = await axios.get(baseUrl + "/top/anime");
      context.commit("setTopAnimes", data.data.data);
    },

    async getTopTvAnimeList(context) {
      let data = await axios.get(baseUrl + "/anime?page=1&type=tv");
      context.commit("setTopTvAnimes", data.data.data);
    },

    async getTopMovieAnimeList(context) {
      let data = await axios.get(baseUrl + "/anime?page=1&type=movie");
      console.log(data.data.data);
      context.commit("setTopMovieAnimes", data.data.data);
    },
  },
});
