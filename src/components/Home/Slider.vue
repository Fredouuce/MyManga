<template>
  <div class="slider-container">
    <h1 class="slider-title">{{ title }}</h1>
    <!-- BOUTTON CHEVRON -->
    <div class="slider-btn">
      <button
        @click="handleSlide('l')"
        class="chevron chevron-l"
        v-if="offset > 0"
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      <button @click="handleSlide('r')" class="chevron chevron-r">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <!-- Séparateur de slider -->
    <div class="slider" :style="{ 'margin-left': '-' + offset + 'px' }">
      <!-- CARTES SLIDER -->
      <div v-for="(item, index) in items" :key="index">
        <Card :anime="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Slider",
  props: ["title", "items"],
  data() {
    return {
      offset: 0,
    };
  },
  components: {
    Card,
  },
  methods: {
    handleSlide(direction) {
      const cardsize = 231;
      const width = window.innerWidth;
      const listSize = this.items.length;
      const canShow = Math.ceil(width / cardsize);
      const multiplier = this.getSizeMultiplier(width);
      const offsetMoveTo = cardsize * multiplier;
      if (direction === "l")
        this.offset =
          this.offset - offsetMoveTo < 0 ? 0 : this.offset - offsetMoveTo;
      if (direction === "r")
        this.offset =
          this.offset > (listSize - canShow) * cardsize
            ? 0
            : this.offset + offsetMoveTo;
    },
    getSizeMultiplier(width) {
      if (width <= 767) {
        return 1;
      } else if (width <= 1440) {
        return 3;
      } else {
        return 5;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-container {
  position: relative;
  overflow-x: hidden;
  margin-bottom: 2em;
  .slider-title {
    font-size: 1.5em;
    font-weight: 500;
    margin-bottom: 0.5em;
    display: inline-block;
  }
  .slider-btn {
    .chevron {
      background: none;
      border: none;
      color: white;
      height: 350px;
      width: calc(30px + 3vw);
      padding: 0;
      cursor: pointer;
      font-size: 1.5em;
      transition: 300ms ease;
      &:hover {
        font-size: 2em;
        background: rgba(34, 34, 34, 0.705);
      }
    }

    .chevron-l {
      position: absolute;
      left: 0;
      bottom: 16px;
      z-index: 5;
    }
    .chevron-r {
      position: absolute;
      right: 0;
      bottom: 16px;
      z-index: 5;
    }
  }
  .slider {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    transition: 300ms ease-in-out;
  }
}
</style>
