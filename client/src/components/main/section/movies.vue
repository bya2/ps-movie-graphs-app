<template>
  <ul class="comp-movies list-box">
    <li
      class="list-item"
      v-for="movie__obj in prop__movies__arr"
      :key="movie__obj.id"
      :name="movie__obj.id"
      tabindex="0"
    >
      <!-- 그래프 -->
      <div class="graph-box">
        <LineChart :prop__chart_data__arr="chart_data__arr" />
      </div>

      <!-- 영화 정보 -->
      <div class="info-box">
        <div class="poster-box">
          <img :src="movie__obj.poster_path" alt="poster" />
          <em :class="{ 'is-adult': movie__obj.adult }"></em>
        </div>
        <div class="detail-box">
          <p>{{ movie__obj.title }}</p>
          <p>{{ movie__obj.overview }}</p>
          <ul>
            <li
              v-for="genre_id in movie__obj.genre_ids"
              :key="`${movie__obj.id}${genre_id}`"
            >
              <span>{{ genre_id }}</span>
            </li>
          </ul>

          <!-- 평점, 참여 인원, 인기도 -->
          <p>{{ movie__obj.vote_average }}</p>
          <p>{{ movie__obj.vote_count }}</p>
          <p>{{ movie__obj.popularity }}</p>

          <p>{{ movie__obj.release_date }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { ArrMovies } from "@/model/type";
import CompLineChart from "@/components/reusable/line_chart.vue";

export default Vue.extend({
  name: "comp-movies",
  components: {
    LineChart: CompLineChart,
  },
  props: {
    prop__movies__arr: Array as () => ArrMovies,
  },
  data() {
    return {
      init__active__obj: Object,
      chart_data__arr: [] as Array<Array<Date | string | number>>,
    };
  },
  mounted() {
    const movies__arr: ArrMovies = this.prop__movies__arr;
    const init__active__obj: any = movies__arr.reduce(
      (obj, movie__obj) => ((obj[movie__obj.id] = false), obj),
      {}
    );
    this.init__active__obj = init__active__obj;

    // <p>{{ movie__obj.vote_average }}</p>
    // <p>{{ movie__obj.vote_count }}</p>
    // <p>{{ movie__obj.popularity }}</p>

    // this.chart_data__arr = movies__arr.reduce((arr, movie__obj) => {
    //   return [...arr, ["날짜", moive__obj.popularity]];
    // }, ["Date", "Popularity"]);

    this.chart_data__arr = [
      ["Datum", "RandomVisitorNrs"],
      [new Date("2015-01-01"), 3898],
      [new Date("2015-02-01"), 3187],
      [new Date("2015-03-01"), 4598],
      [new Date("2015-04-01"), 4830],
      [new Date("2015-05-01"), 6401],
      [new Date("2015-06-01"), 2944],
      [new Date("2015-07-01"), 2485],
      [new Date("2015-08-01"), 2696],
      [new Date("2015-09-01"), 2766],
      [new Date("2015-10-01"), 3670],
      [new Date("2015-11-01"), 3617],
      [new Date("2015-12-01"), 3863],
      [new Date("2016-01-01"), 3750],
      [new Date("2016-02-01"), 3758],
      [new Date("2016-03-01"), 4367],
      [new Date("2016-04-01"), 4038],
      [new Date("2016-05-01"), 5333],
      [new Date("2016-06-01"), 5604],
      [new Date("2016-07-01"), 7371],
      [new Date("2016-08-01"), 4002],
      [new Date("2016-09-01"), 4692],
      [new Date("2016-10-01"), 3887],
      [new Date("2016-11-01"), 3028],
      [new Date("2016-12-01"), 3533],
      [new Date("2017-01-01"), 3877],
      [new Date("2017-02-01"), 4178],
      [new Date("2017-03-01"), 4507],
      [new Date("2017-04-01"), 4540],
      [new Date("2017-05-01"), 5254],
      [new Date("2017-06-01"), 6531],
      [new Date("2017-07-01"), 9099],
      [new Date("2017-08-01"), 4000],
      [new Date("2017-09-01"), 4106],
      [new Date("2017-10-01"), 4002],
      [new Date("2017-11-01"), 4418],
      [new Date("2017-12-01"), 4931],
      [new Date("2018-01-01"), 4650],
      [new Date("2018-02-01"), 3750],
      [new Date("2018-03-01"), 6069],
      [new Date("2018-04-01"), 6704],
      [new Date("2018-05-01"), 6028],
      [new Date("2018-06-01"), 8078],
      [new Date("2018-07-01"), 10903],
      [new Date("2018-08-01"), 5888],
      [new Date("2018-09-01"), 5519],
      [new Date("2018-10-01"), 4555],
      [new Date("2018-11-01"), 3998],
      [new Date("2018-12-01"), 6998],
    ];
  },
});
</script>

<style lang="scss">
ul.list-box {
  position: relative;
  @extend .ul-no-space;
  padding-top: 160px;
  @extend .f-box;
  @extend .f-c-SS;

  .list-item {
    @extend .li-no-style;
    width: 95%;
    min-height: 320px;
    background-color: hsla(0, 0%, 0%, 0.4);

    padding: 16px;

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
    &.active {
      box-shadow: 0 0 0 2px blue;
    }
    & > div {
      box-shadow: 0 0 0 2px white;
    }

    .graph-box {
      // canvas?
    }

    .info-box {
      @include layout-grid-rows(1fr 1fr);
      gap: 8px;
      padding: 8px;

      & > div {
        box-shadow: 0 0 0 2px white;
      }
    }
  }
}

@include mobile {
  .list-box {
    li.list-item {
      @include layout-grid-rows(1fr 1fr);
      gap: $g-gap-movie;
    }
  }
}
@include tablet {
  .list-box {
    li.list-item {
      @include layout-grid-rows(1fr 1fr);
      gap: $g-gap-movie;
    }
  }
}
@include laptop {
  .list-box {
    li.list-item {
      @include layout-grid-cols($g-cols-movie);
      gap: $g-gap-movie;
    }
  }
}
@include desktop {
  .list-box {
    li.list-item {
      @include layout-grid-cols($g-cols-movie);
      gap: $g-gap-movie;
    }
  }
}
@include screen {
  .list-box {
    li.list-item {
      @include layout-grid-cols($g-cols-movie);
      gap: $g-gap-movie;
    }
  }
}
</style>
