<template>
  <Movies :prop__movies__arr="movies__arr"></Movies>
</template>

<script lang="ts">
import Vue from "vue";
import CompMovies from "@/components/main/section/movies.vue";
import { fn_GET__movies__upcoming as fn_GET__movies } from "@/api/movies";
import { ArrMovies } from "@/model/type";

export default Vue.extend({
  name: "view-upcoming",
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
        console.log("ERR:\nLOC:views/upcoming");
        console.error(err);
        this.movies__arr = [];
      });
  },
});
</script>
