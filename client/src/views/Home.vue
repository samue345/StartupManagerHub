<script setup>
  import Aside from '../components/Aside.vue'

</script>
<template>

  <header>
    <div class="caixa_h1">
    <h1>Nós ajudamos você a gerenciar melhor a sua startup!</h1>
    </div>
  </header>
    <main class="conteudo_principal">
        <section class="caixa_images">
          <h3>Crie seu Plano de negócios Canvas</h3>
        </section>

        <section class="caixa_images">
          <h3>Crie uma matriz SWT</h3>
        </section>

    </main>
</template>
<style scoped>


  header{
    width: 100vw;
    height: 70vh;
    background: url('../assets/foto_home.webp') no-repeat center center;
    background-size: cover; 

  }
  .caixa_h1{
    width: 600px;
    position: relative;
    top: 20%;
    left: 5%;
  }
  .caixa_images{
    background: white;
    margin: 20px;
    width: 50vw;
    height: 50vh;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);


  }
  .caixa_h1 h1{
    color: white;
    font-size: 3em;
  }
  
  
</style>