<template>
  <div v-if="animeInfo.length === 0">
    <p>Loading</p>
  </div>
  <div v-else>
    <h2>{{ animeInfo.title }}</h2>
    <p>{{ animeInfo.synopsis }}</p>
  </div>
</template>

<script>
export default {
  name: "synopsisAnime",
  props: ["animeInfo"],
};
</script>

<style></style>
