<template>
  <NowPlaying :prop__movies__arr="movies__arr"></NowPlaying>
</template>

<script lang="ts">
import Vue from "vue";
import CompNowPlaying from "@/components/main/section/movies.vue";
import { fn_GET__movies__now_playing } from "@/api/movies";
import { ArrMovies } from "@/model/type";

console.log(333);

export default Vue.extend({
  name: "view-now-playing",
  components: {
    NowPlaying: CompNowPlaying,
  },
  data() {
    return {
      movies__arr: [] as ArrMovies,
    };
  },
  created() {
    fn_GET__movies__now_playing()
      .then((results__arr: ArrMovies) => {
        this.movies__arr = results__arr;
      })
      .catch((err) => {
        console.log("ERR:\nLOC:views/now_playing");
        console.error(err);
        this.movies__arr = [
          {
            id: "a",
          },
          {
            id: "b",
          },
          {
            id: "c",
          },
        ];
      });
  },
});
</script>
