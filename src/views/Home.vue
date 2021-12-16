<template>
  <Hero />

  <div class="container-card">
    <Slider title="Most liked show" :items="topAnimes" />
    <Slider title="Iconic TV animes" :items="$store.state.topTvAnimes" />
    <Slider title="Best animes movies" :items="$store.state.topMovieAnimes" />
  </div>
</template>

<script>
import Hero from "../components/Home/Hero.vue";
import Slider from "@/components/Home/Slider.vue";
import { mapState } from "vuex";
export default {
  components: {
    Hero,
    Slider,
  },
  data() {
    return {
      animes: [],
    };
  },
  computed: {
    ...mapState(["topAnimes", "TopTvAnimes"]),
  },
  mounted() {
    this.$store.dispatch("getTopAnimeList");
    this.$store.dispatch("getTopTvAnimeList");
    this.$store.dispatch("getTopMovieAnimeList");
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container-card {
  padding: 0 1em;
}
</style>
