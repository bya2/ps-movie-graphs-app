<template>
  <header>
    <div></div>
    <HeaderLogo title="Movie Graphs" />
    <div></div>
  </header>

  <nav>
    <div></div>
    <div class="mid-nav-grp f-box f-r-SEC">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div></div>
  </nav>

  <main class="outer">
    <router-view />
  </main>

  <footer>
    <span></span>
    <span></span>
    <span></span>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderLogo from "@/components/header/logo.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderLogo,
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-size: 1rem;

  // @extend .bs-w-4;
  // overflow: hidden;
}

body {
  margin: 0;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;

  min-height: 100vh;
  background-color: $bgc-d-app;
  color: $c-d-app;
  @include layout-grid-rows($g-rows-app);
  gap: 16px;

  & > header {
    @include layout-grid-cols($g-cols-header);
  }

  & > nav {
    @extend .link;

    .mid-nav-grp {
      font-size: 1.25rem;
    }
  }
  & > main {
    // @include layout-grid-cols($g-cols-main);

    .bg-img {
      max-width: 1025px;
      height: 100%;
      background-color: gray;
      background-image: linear-gradient(
          to top,
          hsla(0, 0%, 0%, 0.9) 50%,
          hsla(192, 100%, 66%, 0)
        ),
        url("@/assets/tmp-backdrop.jpg");
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: center top;
      background-attachment: local;
      opacity: 0.7;
      overflow: hidden;
    }

    & > section {
      position: relative;
      border-left: 1px solid white;
      border-right: 1px solid white;
    }
  }
  & > footer {
    @include layout-grid-cols($g-cols-footer);
  }
}

// Meida Queries
@include mobile {
  #app {
    & > main {
      @include layout-grid-cols($g-cols-main-mobile);
    }
    & > nav {
      @include layout-grid-cols($g-cols-nav-mobile);
    }
  }
}
@include tablet {
  #app {
    & > main {
      @include layout-grid-cols($g-cols-main-tablet);
    }
    & > nav {
      @include layout-grid-cols($g-cols-nav-tablet);
    }
  }
}
@include laptop {
  #app {
    & > main {
      @include layout-grid-cols($g-cols-main-laptop);
    }
    & > nav {
      @include layout-grid-cols($g-cols-nav-laptop);
    }
  }
}
@include desktop {
  #app {
    & > main {
      @include layout-grid-cols($g-cols-main-etc);
    }
    & > nav {
      @include layout-grid-cols($g-cols-nav-etc);
    }
  }
}
@include screen {
  #app {
    & > main {
      @include layout-grid-cols($g-cols-main-etc);
    }
    & > nav {
      @include layout-grid-cols($g-cols-nav-etc);
    }
  }
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
