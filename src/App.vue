<template>
  <div id="app">
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="./assets/logo.svg" width="80" height="28" alt="Logo" />
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
            <span class="icon"><font-awesome-icon icon="home"/></span>
            {{ $t("main") }}
          </router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span class="icon"><font-awesome-icon icon="money-bill"/></span>
              {{ $t("pricing") }}
            </a>

            <div class="navbar-dropdown">
              <router-link to="/pricing/lotnictwo" class="navbar-item">
                <span class="icon"><font-awesome-icon icon="plane"/></span>
                {{ $t("airplanes") }}
              </router-link>
              <router-link to="/pricing/kolej" class="navbar-item">
                <span class="icon"><font-awesome-icon icon="train"/></span>
                {{ $t("trains") }}
              </router-link>
              <router-link to="/pricing/maski" class="navbar-item">
                <span class="icon"><font-awesome-icon icon="mask"/></span>
                {{ $t("masks") }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <a v-on:click="$i18n.locale = 'pl'" class="navbar-item"
            ><span class="flag-icon flag-icon-pl"></span
          ></a>
          <a v-on:click="$i18n.locale = 'en'" class="navbar-item"
            ><span class="flag-icon flag-icon-gb"></span
          ></a>
        </div>
      </div>
    </nav>
    <section class="hero">
      <div class="hero-body">
        <img
          src="./assets/banner.svg"
          class="image is-pulled-right"
          alt="Banner strony"
        />
      </div>
    </section>
    <router-view class="section" />
  </div>
</template>

<script>
import { db, storage } from "./firebase";
import "flag-icon-css/css/flag-icon.min.css";
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
    const maskiCollection = db.collection("maski");
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
        pathRef
          .getDownloadURL()
          .then(url => {
            model.image = url;
            this.$store.commit("ADD_MODEL", {
              target: "lotnictwo",
              content: model
            });
          })
          .catch(err => console.log(err));
      });
    });
    maskiCollection.onSnapshot(modelsRef => {
      modelsRef.forEach(doc => {
        console.log(doc.data());
        const model = doc.data();
        let pathRef = storage.ref(`maski/${model.id}.jpg`);
        pathRef.getDownloadURL().then(url => {
          model.image = url;
          this.$store.commit("ADD_MODEL", {
            target: "maski",
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
.icon {
  padding: 0 20px;
}
</style>
