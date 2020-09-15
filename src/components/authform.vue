<template>
  <form>
      <input type="email" id="email"><div class="break"></div>
      <input type="password" id="password"><div class="break"></div>
      <input type="password" id="confirm_pass"><div class="break"></div>
      <button type="submit" class="button btn-submit">Зарегистрироваться</button>
  </form>
</template>

<script>
export default {

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
      background-color: #413b63;
    }
  }

  .break {
    flex-basis: 100%;
    width: 0;
  }
}
</style>