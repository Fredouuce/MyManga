<template>
  <main>
    <div class="hero">
      <img src="../../assets/hero.jpg" alt="" class="hero-img" />
      <div class="hero-info">
        <img src="../../assets/OP.png" alt="" class="hero-logo" />
        <p class="hero-sypnosis">
          Monkey D. Luffy rêve de retrouver ce trésor légendaire et de devenir
          le nouveau "Roi des Pirates". Après avoir mangé un fruit du démon, il
          possède un pouvoir lui permettant de réaliser son rêve. Il lui faut
          maintenant trouver un équipage pour partir à l'aventure !
        </p>
        <a href="" class="hero-btn"
          ><i class="fas fa-info-circle"></i>Plus d'infos</a
        >
      </div>
      <div class="blur"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
.hero {
  overflow: hidden;
  height: 100vh;
  position: relative;
  .blur {
    position: absolute;
    height: 150px;
    width: 100vw;
    bottom: 0;
    background: rgb(41, 41, 41);
    background: linear-gradient(
      0deg,
      rgba(41, 41, 41, 1) 3%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .hero-img {
    z-index: -1;
    position: absolute;

    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  .hero-btn {
    display: inline-block;
    margin-top: 1em;
    padding: 0.5em 1.5em;
    color: white;
    text-decoration: none;
    background: rgba(56, 56, 56, 0.4);
    font-size: calc(12px + 0.7vw);
    transition: 300ms ease;
    border-radius: 5px;
    font-weight: 700;
    text-align: center;
    &:hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
    i {
      font-size: calc(12px + 0.7vw);
      margin-right: 0.5em;
    }
  }

  .hero-info {
    position: relative;
    width: 50vw;
    max-width: 750px;

    margin-top: 10em;
    margin-left: 5em;
    .hero-logo {
      max-width: 640px;
      width: 50vw;
    }

    .hero-sypnosis {
      font-size: calc(12px + 0.5vw);
      line-height: normal;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    }
  }
}

@media screen and (min-width: 450px) {
}
</style>
