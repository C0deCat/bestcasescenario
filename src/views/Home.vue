<template>
  <div class="home">
    <p class="line">Пиши сценарии.</p>
    <p class="line">Создавай миры.</p>
    <p class="line">Развивай воображение.</p>
    <p class="line" v-if="user">{{ user.email }}</p>
    <p v-else><router-link to="/login" class="button btn-join">Присоединиться</router-link></p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    user() {
      this.$store.commit('update_user')
      return this.$store.state.user
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";

.line {
  font-size: 30px;
  font-family: 'Spectral', serif;
  color: $primary;
  font-weight: bold;
}

.btn-join {
  background: $highlight;
  color: $secondary;
  padding: 15px;
  font-size: 20px;
  font-family: 'Roboto Slab', serif;

  &:hover {
    background: #8596D4;
  }
}
</style>
