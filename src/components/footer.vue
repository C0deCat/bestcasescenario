<template>
  <div class="footer">
      powered By... 
      <img class="icon" src="@/assets/vue_logo.svg">
      <img class="icon" src="@/assets/node_logo.svg">
      <img class="icon" src="@/assets/sass_logo.svg">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../styles.scss";

.footer {
    background: $primary;
    width: 100%;
    padding: 10px;
    bottom: 0px;
    position: fixed;
    text-align: left;
    color: $secondary;
    font-family: 'Roboto Slab', serif;
}

.icon {
    height: 32px;
    vertical-align: middle;
    padding-right: 10px;
}
</style>