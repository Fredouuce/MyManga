<template>
  <header>
    <nav class="navbar">
      <!-- Left nav -->
      <div class="left-nav">
        <h1 class="logo">My Manga</h1>
        <ul class="nav-list">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">Séries</router-link></li>
          <li><router-link to="/about">Films</router-link></li>
        </ul>
      </div>

      <!-- right nav -->
      <div class="right-nav">
        <div class="search">
          <label for="search-nav" class="search-loop"
            ><i class="fas fa-search"></i
          ></label>
          <input
            type="text"
            id="search-nav"
            name="search-nav"
            class="search-input"
            placeholder="Titre,personnes,genres"
          />
        </div>
        <div class="account">
          <img src="../assets/profile.png" alt="" class="img-acc" />
          <small class="name-acc"></small>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

.left-nav {
  display: flex;
  flex-direction: row;
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
  z-index: 5;
  .nav-list {
    display: flex;
    margin-left: 4em;
    li {
      list-style: none;
      margin-right: 1em;
      a {
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
  color: white;
  font-size: 2em;
  font-family: "Satisfy", cursive;
}

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
</style>
