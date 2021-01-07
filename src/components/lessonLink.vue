<template>
  <router-link class="lesson" 
  v-bind:class="[isComplete ? 'l-complete' : 'l-uncomplete']"
  v-bind:to="link">
      {{ name }}
  </router-link>
</template>

<script>
export default {
    props: {
        link: String,
        name: String,
        isComplete: Boolean
    }
}
</script>

<style lang="scss" scoped>
@import "../styles.scss";
.lesson {
    display: block;
    text-decoration: none;
    padding: 10px;
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
    flex-basis: 600px;
    color: $secondary;
    &:hover {
        color: $highlight
    }
}
.l-uncomplete {
    background-color: $primary;
}
.l-complete {
    background-color: $success;
}
</style>