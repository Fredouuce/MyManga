<template>
  <h2>Characters :</h2>
  <div v-if="characters.length > 0" class="main-chara">
    <div
      v-for="character in characters"
      :key="character.id"
      class="chara-container"
    >
      <img
        :src="character.character.images.jpg.image_url"
        alt=""
        class="chara-img"
      />
      <p class="chara-name">{{ character.character.name }}</p>
    </div>
    <div>
      <router-link to="/character/"><span>View all</span></router-link>
    </div>
  </div>
  <div v-else>
    <p>En chargement</p>
    <p>{{ characters.length }}</p>
  </div>
</template>

<script>
export default {
  name: "charactersAnime",
  props: ["characters"],
};
</script>

<style>
.chara-img {
  width: 150px;
  height: 233px;
  position: relative;
}
.chara-name {
  position: absolute;
  width: 100%;
  bottom: 6px;
  background: rgba(43, 43, 43, 0.39);
  padding: 0.5em;
}
.chara-container {
  width: 150px;
  position: relative;
  cursor: pointer;
}
.main-chara {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
