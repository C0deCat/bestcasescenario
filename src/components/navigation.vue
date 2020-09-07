<template>
  <div class="menu">
      <div class="title">
        <a class="title-text" href="#">BestCaseScenario</a>
      </div>
      <div class="links">
        <router-link class="active" to="/">/home</router-link>
        <router-link to="/">/curriculum</router-link>
        <router-link to="/">/about</router-link>
        <router-link to="/">/login</router-link>
      </div>
  </div>
</template>

<script>
export default {

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