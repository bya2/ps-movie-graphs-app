<template>
  <div class="bg-img inner w100 posX-center"></div>
  <aside><span></span></aside>
  <section>
    <span>SECTION</span>
    <CompMovies :prop__movies__arr="movies__arr" />
  </section>
  <aside><span></span></aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CompMovies from "@/components/main/section/movies/index.vue";
import { ArrMovies } from "@/model/type";
import { fn_logic__GET__movies__now_playing } from "@/logic/api/movies";

const fn_pval__movies__now_playing__arr = (): Promise<ArrMovies> =>
  fn_logic__GET__movies__now_playing()
    .then((results__arr) => {
      return results__arr;
    })
    .catch((err) => {
      console.log("view-home");
      console.error(err.message);
      return [];
    });

export default defineComponent({
  name: "view-home",
  components: {
    CompMovies,
  },
  data: function () {
    return {
      movies__arr: [] as ArrMovies,
    };
  },
  methods: {},
  created: async function () {
    const movies__arr: ArrMovies = await fn_pval__movies__now_playing__arr();
    this.movies__arr = movies__arr;
  },
});
</script>
