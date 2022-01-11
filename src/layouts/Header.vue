<template>
  <header>
    <nav class="navbar" :class="{ change_color: scrollPosition > 50 }">
      <!-- Left nav -->
      <div class="left-nav">
        <router-link to="/"
          ><img src="../assets/aniflix.png" alt="" class="logo"
        /></router-link>
        <ul class="nav-list">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">Séries</router-link></li>
          <li><router-link to="/about">Films</router-link></li>
        </ul>
      </div>
      <Search />
    </nav>
  </header>
</template>

<script>
import Search from "../components/Search.vue";
export default {
  name: "Header",
  components: {
    Search,
  },
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

.left-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.navbar {
  position: fixed;
  padding: 1em 2em;
  width: 100vw;
  display: flex;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.8351541300113796) 100%
  );
  align-items: center;
  justify-content: space-between;
  z-index: 6;
  transition: 300ms ease-in-out;
  .nav-list {
    display: flex;
    margin-left: 4em;
    li {
      list-style: none;
      margin-right: 1em;
      a {
        font-size: 14px;
        color: white;
        text-decoration: none;
        transition: 300ms ease;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}

.search-loop {
  font-size: 1.3em;
}

.logo {
  width: 120px;
}

.change_color {
  background-color: rgb(0, 0, 0);
}
</style>
