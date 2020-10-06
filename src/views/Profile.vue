<template>
  <div class="mainscreen">
      <p>{{ user.email }}</p>
      <button class="button btn-logout" @click="logout">Выйти</button>
  </div>
</template>

<script>
import {firebase} from "../main"
import router from '../router'
export default {
  name: 'Home',
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  components: {
  },
  methods: {
      logout() {
          firebase.auth().signOut().then(function() {
              router.push('/')
          })
      }
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
.btn-logout {
    background-color: $error;
    color: $secondary;
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
}
</style>