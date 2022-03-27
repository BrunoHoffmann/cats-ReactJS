<template>
  <div>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  name: 'Title',
  props: {
    title: String,
  },
});

</script>

<style src="./style.css" scoped />
