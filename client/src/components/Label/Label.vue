<template>
  <div>
    <label :for="forLabel">{{ titleLabel }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Label',
  props: {
    titleLabel: String,
    forLabel: String,
  },
});

</script>

<style src="./style.css" scoped />
