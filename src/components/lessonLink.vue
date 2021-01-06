<template>
  <div>
      {{ name }}
  </div>
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
div {
    
}
</style>