<template>
  <div>
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    type: String,
    placeholder: String,
  }
});

</script>

<style src="./style.css" scoped />
