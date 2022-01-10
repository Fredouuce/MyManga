<template>
  <router-link :to="'/anime/' + anime.mal_id" class="card-link">
    <div class="card-container">
      <img :src="anime.images.jpg.image_url" alt="" class="card-img" />

      <div class="card-info">
        <div>
          <h3 class="card-title">{{ anime.title }}</h3>
          <p class="card-synop">
            {{ anime.synopsis.substring(0, 200) }}...
            <span class="readmore">readmore</span>
          </p>
        </div>
        <div class="info-separator"></div>

        <div class="card-bottom">
          <div class="card-genre">
            <span>{{ anime.type }} - </span>
            <span v-if="anime.type == 'Movie'">{{ anime.duration }}</span>
            <span v-else>{{ anime.episodes }} épisodes</span>
          </div>

          <div>
            <span><i class="fas fa-chevron-down"></i></span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["anime"],
};
</script>

<style lang="scss" scoped>
.card-link {
  color: white;
}
.card-container {
  height: 350px;
  width: 220px;
  position: relative;
  margin-bottom: 1em;
  margin-right: 0.7em;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    .card-info {
      bottom: 0;
    }
  }
  .card-img {
    width: 220px;
    height: 350px;
    object-fit: cover;
  }
  .card-info {
    position: absolute;
    bottom: -400px;
    transition: 600ms ease;
    padding: 0.5em;
    width: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    .card-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .info-separator {
      width: 90%;
      height: 2px;
      border-radius: 5px;
      margin: 0.5em 0;
      background: white;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    .card-title {
      font-size: 1em;
    }
    .card-synop {
      font-size: 0.7em;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
      .readmore {
        color: rgb(47, 139, 201);
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .card-genre {
      font-size: 0.8em;
    }
  }
}
</style>
