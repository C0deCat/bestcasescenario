<template>
  <div class="menu">
      <div class="title">
        <router-link class="title-text" to="/">BestCaseScenario</router-link>
      </div>
      <div class="links">
        <router-link :class="{ active: (currentRoute === '/') }" to="/">/home</router-link>
        <router-link :class="{ active: (currentRoute === '/curriculum') }" to="/curriculum">/curriculum</router-link>
        <router-link :class="{ active: (currentRoute === '/about') }" to="/about">/about</router-link>
        <router-link v-if="!user" :class="{ active: (currentRoute === '/login') }" to="/login">/login</router-link>
        <router-link v-else :class="{ active: (currentRoute === '/profile') }" to="/profile">/profile</router-link>
      </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  data() {
    return {
      currentRoute: router.currentRoute.path
    }
  },
  methods: {
    
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  watch: {
    $route: function(to) {
      this.currentRoute = to.path
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles.scss";

.menu {
  background: $primary;
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: $secondary;
  align-items: center;
  font-family: 'Roboto Slab', serif;
  a {
    color: $secondary;
    text-decoration: none;
    &:visited {
      color: $secondary;
    }
    &:hover {
      color: $highlight;
    }
    &.active {
      text-decoration: underline;
    }
  }

  .links {
    padding-right: 10px;
    font-size: 20px;
    a {
      margin-left: 10px;
    }
  }

  .title {
    font-size: 32px;
    vertical-align: middle;
    padding-left: 10px;
  }
}

img {
  width: 64px;
}
</style>