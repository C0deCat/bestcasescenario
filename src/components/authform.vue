<template>
  <form class="auth">
      <input type="email" id="email" placeholder="e-mail"><div class="break"></div>
      <input type="password" id="password" placeholder="пароль"><div class="break"></div>
      <input type="password" id="confirm_pass" placeholder="повтор пароля"><div class="break"></div>
      <button type="submit" class="button btn-submit">Зарегистрироваться</button>
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
      router.push('/')
    }
  }
}
</script>

<style lang="scss">

</style>