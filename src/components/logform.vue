<template>
  <form class="auth" @submit.prevent="onSubmit">
      <input type="email" v-model="email" placeholder="e-mail"><div class="break"></div>
      <input type="password" v-model="password" placeholder="пароль"><div class="break"></div>
      <button type="submit" class="button btn-submit">Войти</button>
  </form>  
</template>

<script>
import {firebase} from "../main"
import router from '../router'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .catch(function(error) {
        console.log(error.message)
      })
      this.email = this.password = ''
      this.$store.commit('update_user')
      router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>