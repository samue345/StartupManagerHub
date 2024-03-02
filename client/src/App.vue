<script setup>
  import { useCounterStore } from '/src/store/index.js'
  import NavBar from './components/Navbar.vue'
  import axios from './axios';

  const conter = useCounterStore();


  /*
  axios.post('/g/startup/delete')
  .catch(error => {
          console.error('Erro ao enviar o arquivo:', error);  
   })
   */

  if (conter.user_logado._id === '')
  {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      if (accessToken && refreshToken)
      {
        axios.post(`/a/startup/token`, { reqType: 'login' })
        .then(res =>{
            conter.user_logado = {...res.data.result}
        }) 
        .catch(error => 
        {
          console.error('Erro ao enviar o arquivo:', error);  
        })
      }
    
  }



</script>

<template>
    <NavBar></NavBar>
    <RouterView />

 
</template>

<style scoped>


</style>
