<template>
  <form class="auth" @submit.prevent="onSubmit">
      <input type="email" v-model="email" placeholder="e-mail"><div class="break"></div>
      <input type="password" v-model="password" placeholder="пароль"><div class="break"></div>
      <button type="submit" class="button btn-submit">Войти</button>
  </form>  
</template>

<script>
import {firebase} from "../main"
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async onSubmit() {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.email = this.password = ''
        this.$store.commit('update_user')
        this.$emit('redirect')
      }
      catch(error) {
        console.log(error.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>