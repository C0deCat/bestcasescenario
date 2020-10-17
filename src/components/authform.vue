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
    async onSubmit() {
      if (this.password === this.confirm_password) {
        try {
          const result = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          const data = {
            uid: result.user.uid,
            isAdmin: false
          };
          await firebase.firestore().collection('users').doc(result.user.uid).set(data)
          this.email = this.password = this.confirm_password = ''
          this.$store.commit('update_user')
          this.$emit("redirect")
        } catch (error) {
          console.log(error.message)
        }
      }
    }
  }
}
</script>

<style lang="scss">

</style>