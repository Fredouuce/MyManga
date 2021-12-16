<template>
  <h1 v-if="animeInfo.length === 0">Attendez que vos données se charge</h1>
  <div class="anime-container" v-else>
    <div class="left">
      <img :src="animeInfo.images.jpg.large_image_url" alt="" />
    </div>
    <div class="right">
      <div>
        <h1>{{ animeInfo.title }}</h1>
        <div v-if="animeInfo.type === 'Movie'">
          <p>
            Duration :
            {{
              animeInfo.duration
                ? animeInfo.duration
                : "Duration is not specify"
            }}
          </p>
        </div>
        <div v-else>
          <p>
            Épisodes :
            {{
              animeInfo.episodes
                ? animeInfo.episodes
                : "Number of episodes are not specify"
            }}
          </p>
        </div>
        <p>
          Scored : {{ animeInfo.score ? animeInfo.score : "Not specify" }}/10 by
          {{ animeInfo.scored_by ? animeInfo.scored_by : "Not Specify" }} fans
        </p>
        <p>
          Launched in : {{ animeInfo.year ? animeInfo.year : "Not specify" }}
        </p>
        <p>{{ animeInfo.synopsis }}</p>
      </div>
      <!-- Genre -->
      <p>
        Genres :
        <span v-for="(genre, index) in animeInfo.genres" :key="index">
          {{ genre.name }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Anime",
  data() {
    return {
      animeInfo: [],
    };
  },
  mounted() {
    axios
      .get(`https://api.jikan.moe/v4/anime/${this.$route.params.id}`)
      .then((response) => {
        this.animeInfo = response.data.data;
      });
  },
};
</script>

<style lang="scss" scoped>
.anime-container {
  padding: 0 2em;
  padding-top: 4em;
  display: flex;
  flex-wrap: wrap;
  .right {
    margin-left: 2em;
    width: 500px;
  }
}

@media screen and (max-width: 500px) {
  .right {
    margin-left: 0;
    text-align: center;
  }
}
</style>
