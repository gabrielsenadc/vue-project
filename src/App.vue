<script setup>
  import Navbar from './components/Navbar.vue';
  import { RouterView } from 'vue-router';
  import Advice from './components/Advice.vue';
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
html, body {
  margin: 0;
  background-color: gainsboro;
}
</style>