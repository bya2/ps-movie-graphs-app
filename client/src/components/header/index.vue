<template>
  <header>
    <aside></aside>
    <Logo :prop__logo_title="logo_title__str" />
    <aside></aside>
  </header>
</template>
<script>
import Vue from "vue";
import CompLogo from "./logo";

export default Vue.extend({
  name: "comp-header",
  components: {
    Logo: CompLogo,
  },
  props: {
    prop__logo_title: String,
  },
  data() {
    return {
      logo_title__str: "Movie Graphs",
    };
  },
  computed: {
    b: function () {
      return 1;
    },
  },
});
</script>
<style lang="scss">
header {
  @include layout-grid-cols($g-cols-header);
}
</style>
