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
        <div></div>
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

export default Vue.extend({
  name: "comp-movies",
  props: {
    prop__movies__arr: Array as () => ArrMovies,
  },
  data() {
    return {
      init__active__obj: Object,
    };
  },
  mounted() {
    const movies__arr: ArrMovies = this.prop__movies__arr;
    const init__active__obj: any = movies__arr.reduce(
      (obj, movie__obj) => ((obj[movie__obj.id] = false), obj),
      {}
    );
    this.init__active__obj = init__active__obj;
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
