<template>
  <div>
    <button>{{ title }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
  name: 'Button',
  props: {
    title: String,
  },
  data() {
    // return { imgPath: '~assets/img/a.jpeg' }
  },
  methods: {
    // getURL() {
    //   this.imgPath;
    // }
  }
});

</script>

<style src="./style.css" scoped />
