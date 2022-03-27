<template>
  <div class="header">
    <div>
      <img src="../../assets/img/dogs.svg" alt="">
    </div>
    <div class="login">
      <router-link to="/">Login / Criar</router-link>
      <fa icon="user" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuLogin',
  data() {
    return { imgPath: '~assets/img/a.jpeg' }
  },
  methods: {
    getURL() {
      this.imgPath;
    }
  }
});

</script>

<style src="./style.css" scoped />
