<template>
  <div id="app">
    <Header />
    <Nav />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CompHeader from "./components/header/index.vue";
import CompRootNav from "./components/nav/index.vue";
import CompMain from "./components/main/index.vue";
import CompFooter from "./components/footer/index.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header: CompHeader,
    Nav: CompRootNav,
    Main: CompMain,
    Footer: CompFooter,
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-size: 1rem;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
  background-color: $bgc-d-app;
  color: $c-d-app;
  @include layout-grid-rows($g-rows-app);
  gap: 16px;
}
</style>
