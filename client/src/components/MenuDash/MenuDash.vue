<template>
  <div class="header">
    <div>
      <img src="../../assets/img/cat-logo-black.png" alt="Logo">
    </div>
    <div class="login">
      <router-link to="/">brunohoffmann@gmail.com</router-link>
      <fa icon="user" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuDash',
  methods: {
  }
});

</script>

<style src="./style.css" scoped />
