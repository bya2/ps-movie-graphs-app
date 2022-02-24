<template>
  <div class="comp-logo">
    <span class="txt">
      <router-link to="/">{{ prop__logo_title }}</router-link>
    </span>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "comp-logo",
  props: {
    prop__logo_title: String,
  },
});
</script>

<style lang="scss">
.comp-logo {
  @extend .outer;
  border-bottom: 1px solid white;

  & > .txt {
    @extend .inner;
    @extend .inner-pos-center;
    @extend .logo-link;

    font-family: $base-ft;
    // font-size: $logo-ft-size;
    font-size: 2rem;
    font-weight: 600;
    white-space: nowrap;
  }
}
</style>
