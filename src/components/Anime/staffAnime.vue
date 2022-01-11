<template>
  <div>
    <h2>Staff</h2>

    <div class="staff-container">
      <div v-for="people in staff" :key="people.id" class="staff">
        <img
          :src="people.person.images.jpg.image_url"
          alt=""
          class="staff-img"
        />
        <div class="staff-info">
          <h4 class="staff-name">{{ people.person.name }}</h4>
          <div
            v-for="position in people.positions.slice(0, 2)"
            :key="position.in"
          >
            <p class="staff-role">{{ position }}</p>
          </div>
        </div>
      </div>
      <router-link :to="`/staff`">
        <span class="lien">View all</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "staffAnime",
  props: ["staff"],
};
</script>

<style lang="scss" scoped>
.staff-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .lien {
    position: absolute;
    bottom: 40px;
  }
  .staff {
    width: 150px;
    height: 233px;
    position: relative;
    margin-top: 0.5em;
    cursor: pointer;
    .staff-img {
      width: 150px;
      height: 233px;
      object-fit: cover;
    }
    .staff-info {
      position: absolute;
      bottom: 0;
      padding: 0.5em;
      background: rgba(0, 0, 0, 0.472);
      width: 100%;
    }
  }
}
</style>
