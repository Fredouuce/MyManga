import { createStore } from "vuex";
import axios from "axios";
// import router from "../router";
const baseUrl = "https://api.jikan.moe/v4";

export default createStore({
  state: {
    topAnimes: [],
    topTvAnimes: [],
    topMovieAnimes: [],
    animeDetail: {},
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
    setAnimeDetail(state, data) {
      state.animeDetail = data;
    },
  },
  actions: {
    async getTopAnimeList(context) {
      let data = await axios.get(baseUrl + "/top/anime");
      context.commit("setTopAnimes", data.data.data);
    },

    async getTopTvAnimeList(context) {
      let data = await axios.get(
        baseUrl + "/anime?type=tv&order_by=members&sort=desc"
      );
      context.commit("setTopTvAnimes", data.data.data);
    },

    async getTopMovieAnimeList(context) {
      let data = await axios.get(baseUrl + "/anime?page=1&type=movie");
      context.commit("setTopMovieAnimes", data.data.data);
    },
  },
});
