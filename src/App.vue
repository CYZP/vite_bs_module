<script setup lang="ts">
import NavbarVue from "./components/Navbar.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <NavbarVue />
  <div class="content">
    <router-view></router-view>
  </div>
  <FooterVue />
</template>

<style scoped>
.content {
  min-height: 100%;
  /* height: calc(100%-50px); */
}
</style>
