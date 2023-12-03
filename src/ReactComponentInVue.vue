<template>
  <div class="{{CONTAINER}}">
    <span>Host VUE TS - React Component In Vue</span>
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
  import VanillaMyButton from "remote-mf/VanillaMyButton";
  export default {
    components:{
      VanillaMyButton
    },
    mounted(){
      const container = document.getElementById("container");
      VanillaMyButton(container);
    }
  };
</script>
