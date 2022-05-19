<template>
  <div>
    <MenuDash />
    <footer>
      <img src="../../assets/img/cat-logo-black.png" alt="logo">
      <p>Cat. Alguns direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
import MenuDash from '../../components/MenuDash/MenuDash.vue';

export default {
  name: 'Dashboard',
  components: {
    MenuDash,
  }
};
</script>

<style src="./style.css" scoped />
