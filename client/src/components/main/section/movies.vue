<template>
  <ul
    class="comp-movies list-box"
    v-if="Object.values(cond_state__is_active__obj).length !== 0"
  >
    <li
      :class="{
        'list-item': true,
        active: cond_state__is_active__obj[movie__obj.id],
      }"
      v-for="movie__obj in prop__movies__arr"
      :key="movie__obj.id"
      :name="movie__obj.id"
      :ref="movie__obj.id"
      @click.prevent="(e) => fn_handle__click__movie_item(e, movie__obj.id)"
      @blur.prevent="(e) => fn_handle__blur__movie_item(e, movie__obj.id)"
      tabindex="0"
    >
      <!-- 그래프 -->
      <div class="graph-box">
        <LineChart :prop__chart_data__arr="chart_data__obj[movie__obj.id]" />
      </div>

      <!-- 영화 정보 -->
      <div class="detail-box">
        <div class="poster-area">
          <img :src="movie__obj.poster_path" alt="poster" />
          <em :class="{ r19: movie__obj.adult }"></em>
        </div>

        <div class="info-area">
          <div class="group title">
            <span class="title">{{ movie__obj.title }}</span>
          </div>

          <div class="group genre">
            <ul class="list">
              <li
                class="elem"
                v-for="genre in movie__obj.genres"
                :key="`${movie__obj.id}${genre.id}`"
              >
                <span>{{ genre.name }}</span>
              </li>
            </ul>
          </div>

          <div class="group vote">
            <span>{{ movie__obj.vote_average }}</span>
            <span>({{ movie__obj.vote_count }})</span>
          </div>

          <div class="group popularity">
            <span>{{ movie__obj.popularity }}</span>
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
      cond_state__is_active__obj: {},
    };
  },
  created() {
    console.log("CREATE");
    const movies__arr: ArrMovies = this.prop__movies__arr;
    console.log("11: ", movies__arr);
    const init_state__id_of_movies__obj = movies__arr.reduce(
      (obj, movie__obj) => ((obj[movie__obj.id] = false), obj),
      {}
    );
    this.cond_state__is_active__obj = init_state__id_of_movies__obj;
    console.log("22: ", init_state__id_of_movies__obj);
    console.log("CREATE END");
  },
  mounted() {
    console.log("MOUNT");
    const obj = this.cond_state__is_active__obj;
    console.log(Object.values(obj));
    console.log("MOUNT END");
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
  methods: {
    fn_handle__click__movie_item(e?: MouseEvent, movie_id__str?: string) {
      if (!(e instanceof MouseEvent)) return;

      // 영화 ID에 해당하는 키의 값을 TRUE로 변경
      const cond_state__is_active__obj = this.cond_state__is_active__obj as any;
      cond_state__is_active__obj[`${movie_id__str}`] = true;

      // 해당 영화에 포커스
      const ref__movie: Vue | Element = this.$refs[
        `${movie_id__str}`
      ] as HTMLElement;
      if (ref__movie instanceof HTMLElement) ref__movie.focus();
    },
    fn_handle__blur__movie_item(e?: MouseEvent, movie_id__str?: string) {
      const cond_state__is_active__obj = this.cond_state__is_active__obj as any;
      cond_state__is_active__obj[`${movie_id__str}`] = false;
    },
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
    background-image: linear-gradient(
      to top,
      hsla(0, 0%, 100%, 0.3) 10%,
      hsla(0, 0%, 0%, 0.1)
    );

    padding: 16px;

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }

    &.active {
      box-shadow: 0 0 2px 2px hsla(214, 100%, 70%, 0.9);
      transition-duration: 0.2s;
    }

    & > div:nth-of-type(1) {
      box-shadow: 0 0 0 1px white;
      border-radius: 4px;
    }

    & > div:nth-of-type(2) {
      box-shadow: 0 0 2px 4px hsla(0, 0%, 0%, 0.3);
    }

    .graph-box {
      position: relative;
      background-color: white;
      @extend .f-box;
      @extend .f-r-CC;
    }

    .detail-box {
      @include layout-grid-rows(auto 1fr);
      background: linear-gradient(
        135deg,
        hsla(0, 0%, 0%, 0.3) 10%,
        hsla(0, 0%, 100%, 0.3) 70%,
        hsla(0, 0%, 0%, 0.3)
      );
      // color: black;
      .poster-area {
        position: relative;
        img {
          width: 100%;
        }
        em.r19 {
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 50px;
          background-color: red;
          border-radius: 50%;
        }
      }
      .info-area {
        position: relative;
        padding: 5px 0;

        .group {
          // GROUP
          position: relative;
          font-family: $base-kr-ft;
          font-size: 0.75rem;
          overflow: hidden;
          text-overflow: ellipsis;
          @extend .f-box;
          @extend .f-r-CC;
          &:not(:last-of-type) {
            margin-bottom: 4px;
          }

          // INNER TEXT
          span {
            position: relative;
            font-family: inherit;
            font-size: inherit;
            line-height: 1rem;
          }

          // TITLE
          &.title {
            height: 1.25rem;
            font-size: 1em;
            line-height: 1.25rem;
            white-space: nowrap;
            font-weight: 700;

            & > span {
              width: 100%;
              max-width: 160px;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: center;
              // @extend .no-pointer;
            }
          }

          // GENRE
          &.genre {
            @extend .f-box;
            @extend .f-r-CC;
            .list {
              position: relative;
              @extend .ul-no-space;
              display: inline-block;
              .elem {
                @extend .li-no-style;
                display: inline-block;
                padding-right: 3px;
                font-size: 0.75em;
              }
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
