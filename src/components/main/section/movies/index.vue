<template>
  <ul class="comp-movies list-box f-box f-c-CS ul-no-space">
    <li
      class="list-elem g-box li-no-style"
      v-for="movie__obj in prop__movies__arr"
      :key="movie__obj.id"
    >
      <div class="g-box">
        {{ movie__obj.title }}
        <div></div>
        <div></div>
      </div>
      <div></div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArrMovies } from "@/model/type";

export default defineComponent({
  name: "comp-movies",
  props: {
    prop__movies__arr: Array as () => ArrMovies,
  },
});
</script>

<style lang="scss">
.list-elem {
  position: relative;
  width: 95%;
  min-height: 240px;
  background-color: hsla(0, 0%, 0%, 0.7);

  &:first-of-type {
    margin-top: 8px;
  }
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
}
</style>
