<template>
<div class="lessons">
  <LessonLink link="/" name="Lesson 1: Introduction!" isComplete /><div class="break"></div>
  <LessonLink link="/" name="Lesson 2: Introduction! pt. 2" /><div class="break"></div>
</div>
</template>

<script>
import LessonLink from "@/components/lessonLink"
export default {
  components: {
    LessonLink
  }
}
</script>

<style lang="scss" scoped>
.lessons {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin: 1rem;
  justify-content: center;
}
.break {
    flex-basis: 100%;
    width: 0;
  }
</style>