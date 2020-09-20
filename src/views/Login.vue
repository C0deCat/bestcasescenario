<template>
<div class="mainscreen">
    <div class="choose-box">
        <button class="btn-choose button" :class="{active: isReg}" @click="isReg = true">Регистрация</button>
        <button class="btn-choose button" :class="{active: !isReg}" @click="isReg = false">Вход</button>
    </div>
    <Authform v-if="isReg"/>
    <LogForm v-else/>
</div>
</template>

<script>
import Authform from "@/components/authform"
import LogForm from "@/components/logform"
export default {
    data() {
        return {
            isReg: true
        }
    },
    components: {
        Authform, LogForm
    }
}
</script>

<style lang="scss">
@import "../styles.scss";
.choose-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 5px;
}

.btn-choose {
    background: $primary;
    color: $secondary;
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    padding: 6px;
    flex-basis: 140px;
    border-bottom: 4px solid $secondary;
    &.active {
        border-bottom: 4px solid $success;
    }
    &:hover {
        border-bottom: 4px solid $success;
    }
}

form.auth {
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