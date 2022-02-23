<template>
  <!-- 리스트 -->
  <ul class="comp-movies list">
    <li
      class="list-elem"
      :class="{ active: is_active__elem }"
      name="movie__obj.id"
      v-for="movie__obj in prop__movies__arr"
      :key="movie__obj.id"
      @click="fn_handler__click__list_elem"
      @focus="fn_handler__focus__list_elem"
      @blur="fn_handler__blur__list_elem"
      tabindex="0"
    >
      <div class="graph">
        <!-- 그래프 -->
      </div>
      <div class="info">
        <!-- 유저 정보 -->
        <div class="">
          <!-- 배경:backdrop_path -->
          <!-- 포스터: poster_path -->
          <img src="" alt="" />
        </div>
        <div>
          <!-- 성인 여부: adult: bool -->
          <div>
            <!-- 제목: title: string -->
            <!-- 원제목: original_title: string -->
          </div>
          <div>
            <!-- 장르:genre_ids: string[] -->
          </div>
          <div>
            <!-- 설명: overview: string -->
          </div>
          <div>
            <!-- 평점: vote_average: number(float)  -->
            <!-- 투표 인원: vote_count: number -->
          </div>
          <div>
            <!-- 출시일: release_date: string -->
          </div>
          <div>
            <!-- 인기도: popularity: float -->
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { ArrMovies, e_tg } from "@/model/type";

export default defineComponent({
  name: "comp-movies",
  props: {
    prop__movies__arr: Array as () => ArrMovies,
  },
  data() {
    return {
      is_active__elem: false,
    };
  },
  methods: {
    // fn_handler__click__list_elem(e: Event) {
    //   const e_curr_tg: e_tg = e.currentTarget;
    //   console.log(e_curr_tg);
    //   this.is_active__elem = true;
    // },
    fn_handler__focus__list_elem(e: Event) {
      const e_curr_tg: e_tg = e.currentTarget;
      console.log(e_curr_tg);
      this.is_active__elem = true;
    },
    fn_handler__blur__list_leme(e: Event) {
      const e_curr_tg: e_tg = e.currentTarget;
      this.is_active__elem = false;
    },
  },
  mounted() {
    const movies__arr: ArrMovies = prop__movies__arr;
    const init__active__obj: { id: boolean } = movies__arr.reduce(
      (obj, movie__obj): any => ((obj[movie__obj.id] = false), obj),
      {}
    );
  },
});
</script>

<style lang="scss">
.comp-movies {
  & {
    @extend .ul-no-space;
    & > li {
      @extend .li-no-style;
    }
  }

  &.list {
    position: relative;
    padding-top: 160px;
    @extend .f-box;
    @extend .f-c-CS;

    .list-elem {
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
    }
  }
}

@include mobile {
  .list-elem {
    @include layout-grid-rows(1fr 1fr);
    gap: $g-gap-movie;
  }
}

@include tablet {
  .list-elem {
    @include layout-grid-rows(1fr 1fr);
    gap: $g-gap-movie;
  }
}

@include laptop {
  .list-elem {
    @include layout-grid-cols($g-cols-movie);
    gap: $g-gap-movie;
  }
}

@include desktop {
  .list-elem {
    @include layout-grid-cols($g-cols-movie);
    gap: $g-gap-movie;
  }
}
</style>
