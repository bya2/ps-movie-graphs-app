<template>
  <div class="logo-grp outer logo-link">
    <span class="logo-txt inner pos-center">
      <router-link to="/">{{ title }}</router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderLogo",
  props: {
    title: String,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss">
.logo-grp {
  border-bottom: 1px solid white;
  .logo-txt {
    font-family: $base-ft;
    font-size: $ft-size-logo;
    font-weight: 400;
    white-space: nowrap;
  }
}
</style>
