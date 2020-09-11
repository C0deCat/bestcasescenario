<template>
  <form>
      <input type="email" id="email">
      <input type="password" id="password">
      <input type="password" id="confirm_pass">
      <button type="submit">Отправить</button>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>