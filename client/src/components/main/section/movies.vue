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
        <LineChart :prop__chart_data__arr="chart_data__obj[movie__obj.id]" />
      </div>

      <!-- 영화 정보 -->
      <div class="info-box">
        <div class="poster-box">
          <img :src="movie__obj.poster_path" alt="poster" />
          <em :class="{ 'is-adult': movie__obj.adult }"></em>
        </div>
        <div class="detail-box">
          <div class="group">
            <div><span>제목</span></div>
            <p class="title">{{ movie__obj.title }}</p>
          </div>

          <!-- <div class="group">
            <div><span>개요</span></div>
            <p class="overview">{{ movie__obj.overview }}</p>
          </div> -->

          <div class="group">
            <div><span>장르</span></div>
            <ul class="genre-list">
              <li
                class="genre-elem"
                v-for="genre in movie__obj.genres"
                :key="`${movie__obj.id}${genre.id}`"
              >
                <span>{{ genre.name }}</span>
              </li>
            </ul>
          </div>

          <div class="group">
            <div>평점</div>
            <div>
              <span>{{ movie__obj.vote_average }}</span>
              <span>({{ movie__obj.vote_count }})</span>
            </div>
          </div>

          <div class="group">
            <div>인기도</div>
            <p>{{ movie__obj.popularity }}</p>
          </div>
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
      // chart_data__arr: [] as Array<Array<Date | string | number>>,
    };
  },
  computed: {
    chart_data__obj: function () {
      const movies__arr: ArrMovies = this.prop__movies__arr;

      const init__movie_graphs__obj = movies__arr.reduce((obj, movie__obj) => {
        obj[movie__obj.id] = [["Date", "Popularity"]];
        return obj;
      }, {});

      const movie_graphs__obj = movies__arr.reduce((obj, movie__obj) => {
        const prop_graph__movie_obj__arr: Array<{
          popularity: number;
          occured_at: Date;
        }> = movie__obj.graph;

        const graph_dots__arr = prop_graph__movie_obj__arr.reduce(
          (arr: any[], graph_dot__obj: any) => {
            const occured_at__date = new Date(graph_dot__obj.occured_at);
            const yyyy = occured_at__date.getFullYear();
            const mm = occured_at__date.getMonth() + 1;
            const dd = occured_at__date.getDate();
            const yyyy_mm_dd = `${yyyy}-${mm}-${dd}`;
            const date = new Date(yyyy_mm_dd);
            return [...arr, [date, graph_dot__obj.popularity]];
          },
          []
        );

        obj[movie__obj.id] = [...obj[movie__obj.id], ...graph_dots__arr];
        return obj;
      }, init__movie_graphs__obj);

      return movie_graphs__obj;
    },
  },
  mounted() {
    console.log("AA:", this.chart_data__obj);
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
      @include layout-grid-rows(220px 1fr);
      gap: 8px;
      padding: 8px;

      & > div {
        box-shadow: 0 0 0 2px white;
      }

      .poster-box {
        img {
          width: 100%;
        }
      }
      .detail-box {
        padding: 8px;

        .group {
          position: relative;
          box-shadow: 0 0 0 1px white;
          font-family: $base-kr-ft;
          font-size: 0.75rem;

          &:not(:last-of-type) {
            margin-bottom: 8px;
          }

          p {
            margin: 0;
            padding: 0;
          }

          ul {
            @extend .ul-no-space;
            li {
              @extend .li-no-style;
              display: inline-block;
            }
          }

          span {
            font-size: inherit;
          }

          .title {
            // min-height: 80px;
            font-size: inherit;
            line-height: 1rem;
          }
          .overview {
            position: relative;
            width: 100%;
            height: 100px;
            overflow: hidden;
            // white-space: nowrap;
            text-overflow: ellipsis;
            font-size: inherit;
            line-height: 1rem;
          }

          .genre-list {
            font-size: inherit;
            .genre-elem {
              font-size: inherit;
            }
          }
        }
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
