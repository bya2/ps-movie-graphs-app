<template>
  <nav class="comp-root-nav">
    <aside></aside>
    <ul class="nav-mid-area">
      <li v-for="route__obj in routes__arr" :key="route__obj.alt">
        <router-link :to="route__obj.route">
          {{ route__obj.value }}
        </router-link>
      </li>
    </ul>
    <aside></aside>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "comp-root-nav",
  data() {
    return {
      routes__arr: [
        {
          alt: "now_playing",
          route: "/",
          value: "현재 상영",
        },
        {
          alt: "latest",
          route: "/latest",
          value: "최신 영화",
        },
        {
          alt: "upcoming",
          route: "/upcoming",
          value: "개봉 예정",
        },
        {
          alt: "popular",
          route: "/popular",
          value: "인기 영화",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.comp-root-nav {
  ul {
    @extend .ul-no-space;
    li {
      @extend .li-no-style;
    }
  }

  .nav-mid-area {
    @extend .f-box;
    @extend .f-r-SEC;
    @extend .link;
    a {
      font-family: $base-kr-ft;
      font-size: 1.25rem;
      font-weight: 600;
      white-space: nowrap;
    }
  }
}

@include mobile {
  .comp-root-nav {
    @include layout-grid-cols($g-cols-nav-mobile);
  }
}
@include tablet {
  .comp-root-nav {
    @include layout-grid-cols($g-cols-nav-tablet);
  }
}
@include laptop {
  .comp-root-nav {
    @include layout-grid-cols($g-cols-nav-laptop);
  }
}
@include desktop {
  .comp-root-nav {
    @include layout-grid-cols($g-cols-nav-etc);
  }
}
@include screen {
  .comp-root-nav {
    @include layout-grid-cols($g-cols-nav-etc);
  }
}
</style>
