<template>
  <div v-if="movies__arr instanceof Array && movies__arr.length >= 1">
    <Movies :prop__movies__arr="movies__arr"></Movies>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CompMovies from "@/components/main/section/movies.vue";
import { fn_GET__movies__popular as fn_GET__movies } from "@/api/movies";
import { ArrMovies } from "@/model/type";

export default Vue.extend({
  name: "view-popular",
  components: {
    Movies: CompMovies,
  },
  data() {
    return {
      movies__arr: [] as ArrMovies,
    };
  },
  mounted() {
    fn_GET__movies()
      .then((results__arr: ArrMovies) => {
        this.movies__arr = results__arr;
      })
      .catch((err) => {
        console.log("ERR:\nLOC:views/popular");
        console.error(err);
        this.movies__arr = [];
      });
  },
});
</script>
