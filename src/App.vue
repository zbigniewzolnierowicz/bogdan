<template>
  <div id="app" class="">
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="./assets/logo.svg" width="80" height="28" />
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavbar"
          v-on:click="burgerExpand"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mainNavbar" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Strona główna
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Cennik
            </a>

            <div class="navbar-dropdown">
              <router-link to="/pricing/kolej" class="navbar-item">
                Kolej
              </router-link>
              <router-link to="/pricing/lotnictwo" class="navbar-item">
                Lotnictwo
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="hero">
      <div class="hero-body">
        <img src="./assets/banner.svg" class="image is-pulled-right" />
      </div>
    </section>
    <router-view class="section" />
  </div>
</template>

<script>
import { db, storage } from "./firebase";
export default {
  name: "App",
  methods: {
    burgerExpand: function(event) {
      let target = event.target.dataset.target;
      event.target.classList.toggle("is-active");
      let expando = document.querySelector(`#${target}`);
      expando.classList.toggle("is-active");
    }
  },
  created() {
    const kolejCollection = db.collection("kolej");
    const lotnictwoCollection = db.collection("lotnictwo");
    kolejCollection.onSnapshot(modelsRef => {
      modelsRef.forEach(doc => {
        const model = doc.data();
        let pathRef = storage.ref(`kolej/${model.id}.jpg`);
        pathRef.getDownloadURL().then(url => {
          model.image = url;
          this.$store.commit("ADD_MODEL", {
            target: "kolej",
            content: model
          });
        });
      });
    });
    lotnictwoCollection.onSnapshot(modelsRef => {
      modelsRef.forEach(doc => {
        const model = doc.data();
        let pathRef = storage.ref(`lotnictwo/${model.id}.jpg`);
        pathRef.getDownloadURL().then(url => {
          model.image = url;
          this.$store.commit("ADD_MODEL", {
            target: "lotnictwo",
            content: model
          });
        });
      });
    });
  }
};
</script>
<style lang="scss">
.hero {
  background: url("./assets/banner.png");
  background-size: 100%;
  background-position-y: center;
  margin-top: 52px;
}
.hero-body img {
  height: 40vh;
}
</style>
