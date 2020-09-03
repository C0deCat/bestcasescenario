<template>
  <div class="menu">
      <a class="username" href="#"><img src="@/assets/user.png"></a>
      <a class="title" href="#"><img src="@/assets/quill-drawing-a-line.png">BestCaseScenario</a>
      <div class="links">
        <a href="#">/home</a>
        <a href="#">/curriculum</a>
        <a href="#">/about</a>
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
  height: 60px;
  display: flex;
  justify-content: space-between;
  color: $secondary;
  align-items: center;

  a {
    text-decoration: none;
    &:visited {
      color: $secondary;
    }
  }

  .title {
    font-size: 32px;
  }
}

img {
  width: 32px;
}
</style>