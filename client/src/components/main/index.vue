<template>
  <main class="comp-main">
    <div class="bg-img"></div>
    <aside></aside>
    <section>
      <router-view></router-view>
    </section>
    <aside></aside>
  </main>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "comp-main",
  components: {},
  data() {
    return {
      a: 1,
    };
  },
});
</script>
<style lang="scss">
main {
  @extend .outer;
  .bg-img {
    @extend .inner;
    @extend .inner-w100;
    @extend .inner-posX-center;

    max-width: 1025px;
    height: 100%;
    background-color: gray;
    background-image: linear-gradient(
        to top,
        hsla(0, 0%, 0%, 0.9) 50%,
        hsla(192, 100%, 66%, 0)
      ),
      url("@/assets/tmp-backdrop.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: local;
    opacity: 0.7;
    overflow: hidden;
  }
}

@include mobile {
  main {
    @include layout-grid-cols($g-cols-main-mobile);
  }
}
@include tablet {
  main {
    @include layout-grid-cols($g-cols-main-tablet);
  }
}
@include laptop {
  main {
    @include layout-grid-cols($g-cols-main-laptop);
  }
}
@include desktop {
  main {
    @include layout-grid-cols($g-cols-main-etc);
  }
}
@include screen {
  main {
    @include layout-grid-cols($g-cols-main-etc);
  }
}
</style>
