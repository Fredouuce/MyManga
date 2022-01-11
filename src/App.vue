<template>
  <Header></Header>
  <div class="my-main">
    <router-view />
  </div>
</template>

<script>
import Header from "@/layouts/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background: #292929;
  color: white;
}
a {
  color: white;
  text-decoration: none;
}
</style>
