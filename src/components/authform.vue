<template>
  <form class="auth" @submit.prevent="onSubmit">
      <input type="email" v-model="email" placeholder="e-mail"><div class="break"></div>
      <input type="password" v-model="password" placeholder="пароль"><div class="break"></div>
      <input type="password" v-model="confirm_password" placeholder="повтор пароля"><div class="break"></div>
      <button type="submit" class="button btn-submit">Зарегистрироваться</button>
  </form>
</template>

<script>
import {firebase} from "../main"
export default {
  data() {
    return {
      email: '',
      password: '',
      confirm_password: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.password === this.confirm_password) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          console.log(error.message)
        })
      }
      this.email = this.password = this.confirm_password = ''
      this.$emit("toLogin")
    }
  }
}
</script>

<style lang="scss">

</style>