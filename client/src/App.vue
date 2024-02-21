<script setup>
import NavBar from './components/Navbar.vue'
import Aside from './components/Aside.vue'

</script>

<template>
    <NavBar></NavBar>
    <div class="flex">
    <Aside></Aside>
    <RouterView />
   </div> 

 
</template>

<style scoped>


</style>
