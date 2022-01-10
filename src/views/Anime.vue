<template>
  <h1 v-if="animeInfo.length === 0">Attendez que vos données se charge</h1>
  <div class="anime-container" v-else>
    <div class="background">
      <img
        :src="animeInfo.images.jpg.large_image_url"
        alt=""
        class="background-img"
      />
    </div>
    <div class="info-container">
      <div class="first">
        <!--***********************************Cotés gauche*****************************************************-->
        <div class="left">
          <img
            :src="animeInfo.images.jpg.large_image_url"
            alt=""
            class="anime-img"
          />

          <div v-if="animeInfo.type === 'Movie'">
            <p>{{ animeInfo.title }}</p>
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
            Scored :
            {{ animeInfo.score ? animeInfo.score : "Not specify" }}/10 by
            {{ animeInfo.scored_by ? animeInfo.scored_by : "Not Specify" }}
            fans
          </p>
          <p>
            Launched in :
            {{ animeInfo.year ? animeInfo.year : "Not specify" }}
          </p>
          <p class="genres">
            Genres :
            <span v-for="(genre, index) in animeInfo.genres" :key="index">
              {{ genre.name }},
            </span>
          </p>
        </div>
        <!--***********************************Cotés droit*****************************************************-->
        <div class="right">
          <button
            @click="setAnimeInfo('synopsis-anime')"
            :class="setInfo === 'synopsis-anime' ? 'active' : ''"
          >
            Details
          </button>
          <button
            @click="setAnimeInfo('characters-anime')"
            :class="setInfo === 'characters-anime' ? 'active' : ''"
          >
            Characters
          </button>
          <button
            @click="setAnimeInfo('staff-anime')"
            :class="setInfo === 'staff-anime' ? 'active' : ''"
          >
            Staff & Production
          </button>
          <div class="content-info">
            <component
              :is="setInfo"
              :animeInfo="animeInfo"
              :characters="tenChara"
            ></component>
          </div>
        </div>
      </div>
    </div>
  </div>
  <span> {{ typeof error }}</span>
</template>

<script>
import axios from "axios";
import charactersAnime from "../components/Anime/charactersAnime.vue";
import staffAnime from "../components/Anime/staffAnime.vue";
import synopsisAnime from "../components/Anime/synopsisAnime.vue";
export default {
  name: "Anime",
  components: {
    charactersAnime,
    staffAnime,
    synopsisAnime,
  },
  data() {
    return {
      animeInfo: [],
      error: null,
      setInfo: "synopsis-anime",
      animeCharacters: [],
      tenChara: null,
    };
  },
  methods: {
    setAnimeInfo(cmp) {
      this.setInfo = cmp;
      console.log(this.setInfo);
    },
  },
  mounted() {
    axios
      .get(`https://api.jikan.moe/v4/anime/${this.$route.params.id}`)
      .then((response) => {
        this.animeInfo = response.data.data;
        axios
          .get(`https://api.jikan.moe/v4/anime/${this.$route.params.id}/staff`)
          .then((response) => {
            console.log(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
        //******************** */
        axios
          .get(
            `https://api.jikan.moe/v4/anime/${this.$route.params.id}/characters`
          )
          .then((response) => {
            this.animeCharacters = response.data.data;
            this.tenChara = response.data.data.slice(0, 10);
            console.log(this.tenChara);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        this.error = error;
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.anime-container {
  padding-top: 4em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .info-container {
    max-width: 1400px;
    background: rgba(0, 0, 0, 0.315);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
    width: 95%;
    left: 50%;
    padding: 1.5rem;
    transform: translateX(-50%);
    border-radius: 5px;
  }
  .left {
    width: 300px;
    .anime-img {
      width: 300px;
      border-radius: 5px;
    }
  }
  .right {
    margin-left: 2em;
    width: 60%;
    .active {
      &::after {
        content: "";
        width: 100%;
        height: 3px;
        background: white;
        position: absolute;
        left: 0;
        bottom: -10px;
        transition: 300ms ease-in-out;
      }
    }
    .content-info {
      margin-top: 1em;
    }
    button {
      background: none;
      color: white;
      border: none;
      font-size: 1.2em;
      margin-right: 1em;
      cursor: pointer;
      position: relative;

      &::after {
        content: "";
        width: 0;
        height: 3px;
        background: white;
        position: absolute;
        left: 0;
        bottom: -10px;
        transition: 300ms ease-in-out;
      }
      &:hover::after {
        width: 100%;
        background: rgb(60, 60, 153);
      }
    }
  }
  .first {
    display: flex;
    flex-wrap: wrap;
  }
  .background {
    .background-img {
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      z-index: -1;
      position: absolute;
      object-fit: cover;
      object-position: 100% 25%;
      filter: blur(1.5rem);
    }
  }
}

@media screen and (max-width: 500px) {
  .right {
    margin-left: 0;
    text-align: center;
  }
}
</style>
