<template>
  <div class="home">
    <p>Пиши сценарии.</p>
    <p>Создавай миры.</p>
    <p>Развивай воображение.</p>
    <button>Присоединиться</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";

p {
  font-size: 30px;
  font-family: 'Spectral', serif;
  color: $primary;
  font-weight: bold;
}
</style>
