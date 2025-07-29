<script setup>
import NavBar from './components/nav-bar/index.vue'
import Footer from './components/footer/index.vue'
</script>

<template>
  <div>
    <NavBar />
    <router-view />  
    <Footer />
  </div>
</template>
