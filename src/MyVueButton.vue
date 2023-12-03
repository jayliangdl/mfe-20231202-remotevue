<template>
  <div>
    <p>{{ num }}</p>
    <button @click="increment">click me1</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'MyVueButton',
  setup() {
    const num = ref(0);

    const increment = () => {
      num.value += 3;
    };

    return { num, increment };
  }
};
</script>

<style>

</style>
