<template>
  <form @submit.prevent="onSubmit">
      <input type="email" v-model="email"><div class="break"></div>
      <input type="password" v-model="password"><div class="break"></div>
      <input type="password" v-model="confirm_password" v-if="isRegistration"><div class="break"></div>
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

<style lang="scss" scoped>
@import "../styles.scss";
form {
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.2rem;
  justify-content: center;
  
  input {
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
    padding: 5px;
    color: $primary;
  }

  input, button {
    flex-basis: 250px;
  }

  .btn-submit {
    padding: 10px;
    font-family: 'Roboto Slab', serif;
    font-size: 17px;
    background-color: $primary;
    color: $secondary;

    &:hover {
      background-color: $highlight;
    }
  }

  .break {
    flex-basis: 100%;
    width: 0;
  }
}
</style>