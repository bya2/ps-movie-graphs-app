<template>
  <div v-if="movies__arr instanceof Array && movies__arr.length >= 1">
    <Movies :prop__movies__arr="movies__arr"></Movies>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CompMovies from "@/components/main/section/movies.vue";
import { fn_GET__movies__now_playing as fn_GET__movies } from "@/api/movies";
import { ArrMovies } from "@/model/type";
import { movie } from "@/config/request/movie/endpoint";

export default Vue.extend({
  name: "view-now_playing",
  components: {
    Movies: CompMovies,
  },
  data() {
    return {
      movies__arr: [] as ArrMovies,
    };
  },
  async created() {
    await fn_GET__movies()
      .then((results__arr: ArrMovies) => {
        console.log("12321");
        this.movies__arr = results__arr;
      })
      .catch((err) => {
        console.log("ERR:\nLOC:views/now_playing");
        console.error(err);
        this.movies__arr = [];
      });
  },
  mounted() {
    console.log("00: ", this.movies__arr);
  },
});
</script>
