<template>
  <h2>{{ animeInfo.title }}</h2>
  <p>{{ animeInfo.synopsis }}</p>
</template>

<script>
export default {
  name: "synopsisAnime",
  props: ["animeInfo"],
};
</script>

<style></style>
