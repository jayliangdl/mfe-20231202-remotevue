<template>
  <div id="app">
    <h1>Hello World!</h1>
    <MyVueButton/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyVueButton from './MyVueButton.vue';
export default defineComponent({
  name: 'App',
  components:{
    MyVueButton
  }
});
</script>

<style>

</style>
