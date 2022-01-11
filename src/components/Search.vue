<template>
  <!-- right nav -->
  <div class="right-nav">
    <div class="search">
      <label for="search-nav" class="search-loop"
        ><i class="fas fa-search"></i
      ></label>
      <input
        type="search"
        id="search-nav"
        name="search-nav"
        class="search-input"
        placeholder="Titre,personnes,genres"
        ref="searchNav"
        v-on:blur="stopFocus"
        v-on:focus="gainFocus"
        @keyup.stop="searchAnime"
      />

      <div class="dropdown" v-if="searchInput != null && searchInput != ''">
        <div v-if="isLoading">
          <div class="loader"><Loader /></div>
        </div>
        <div v-else-if="animeSearch.length === 0">
          <h3 class="notfound">Sorry we didn't found what you searched for</h3>
        </div>
        <ul v-else>
          <li v-for="anime in animeSearch" :key="anime.id">
            <a :href="`/anime/${anime.mal_id}`">
              <div class="dropdown-container">
                <img
                  :src="anime.images.jpg.image_url"
                  alt=""
                  class="dropdown-img"
                />
                <div class="dropdown-info">
                  <h3 class="dropdown-title">
                    {{
                      anime.title_english ? anime.title_english : anime.title
                    }}
                  </h3>
                  <p class="dropdown-details">
                    ({{ anime.type }},{{ anime.status }})
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

//
<script>
import Loader from "./Template/Loader.vue";
import axios from "axios";
export default {
  name: "Search",
  components: {
    Loader,
  },
  data() {
    return {
      searchInput: null,
      timer: null,
      animeSearch: [],
      isLoading: null,
    };
  },

  methods: {
    searchAnime(event) {
      this.isLoading = true;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.searchInput = event.target.value;
        if (this.searchInput) {
          this.isLoading = null;
          axios
            .get(`https://api.jikan.moe/v4/anime?letter=${this.searchInput}`)
            .then((response) => {
              this.animeSearch = response.data.data.slice(0, 8);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }, 600);
    },

    stopFocus() {
      setTimeout(() => {
        this.searchInput = null;
      }, 200);
    },
    gainFocus() {
      if (this.searchInput == "" || this.searchInput == null) {
        this.searchInput = this.$refs.searchNav.value;
      } else {
        return (this.searchInput = null);
      }
    },
  },
};
</script>

<style lang="scss">
.right-nav {
  display: flex;
  align-items: center;
  width: 360px;
  justify-content: space-between;
}
.search {
  border: 1px solid white;
  background: black;
  width: 290px;
  height: 34px;
  position: relative;
  padding: 0 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
}
.search-input {
  border: none;
  background: black;
  margin-left: 10px;
  width: 100%;
  height: 25px;
  color: white;
  padding: 0 0.5em;
  outline: none;
}

.img-acc {
  width: 50px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
}

.dropdown {
  position: absolute;
  top: 35px;
  width: 270px;
  background: rgba(0, 0, 0, 0.596);
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0.2em;
  padding-bottom: 0.7em;

  .notfound {
    padding: 1em;
    font-weight: 400;
    font-size: 0.8em;
  }
  ul {
    list-style: none;
    li {
      margin-top: 0.5em;
    }
  }
  .loader {
    position: relative;
    left: 35%;
  }
  .dropdown-img {
    height: 70px;
    object-fit: cover;
  }
  .dropdown-container {
    display: flex;
    margin-right: 0.5em;
    overflow: hidden;
    cursor: pointer;
    transition: 300ms ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .dropdown-title {
    font-size: 0.8em;
    font-weight: 400;
  }
  .dropdown-info {
    margin-left: 0.5em;
    height: 70px;
  }
  .dropdown-details {
    font-size: 0.7em;
  }
}
</style>
