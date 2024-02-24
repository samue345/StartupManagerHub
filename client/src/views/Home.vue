<script setup>

</script>
<template>

  <header>
    <div class="caixa_h1">
    <h1>Nós ajudamos você a gerenciar melhor a sua startup!</h1>
    </div>
 
  </header>
  <div class="div_mobile">
    <h1 >Nós ajudamos você a gerenciar melhor a sua startup!</h1>
  </div>
 

   <main id="conteudo_home">
        <section class="caixa_images">
            <div class="caixa_texto_canvas">
              <h3>Crie seu Plano de <br/>negócios Canvas</h3>

            </div>
            <div class="caixa_plan">
              <img src="../assets/plan.webp" alt="">
            </div>
        </section>

        <section class="caixa_images">
          <div class="caixa_texto_canvas">
            <h3>Crie uma matriz SWT</h3>
          </div>
          <div class="caixa_plan">
              <img src="../assets/swot.webp" alt="" id="swot_img">
            </div>
        </section>

    </main>
    <footer>
      <p>&copy; 2024 - Todos os direitos reservados</p>
      <p>Entre em contato pelo e-mail: contato@exemplo.com</p>
      <nav>
        <ul>
          <li class="lista_footer"><a href="#">Termos de uso</a></li>
          <li class="lista_footer"><a href="#">Política de privacidade</a></li>
          <li class="lista_footer"><a href="#">Sobre nós</a></li>
        </ul>
      </nav>
    </footer>
</template>
<style scoped>

#conteudo_home{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
  header{
    width: 100vw;
    height: 80vh;
    background: url('../assets/foto_home.webp') no-repeat center center;
    background-size: cover; 

  }
  .caixa_h1{
    width: 600px;
    position: relative;
    top: 25%;
    left: 5%;
  }
  .div_mobile{
    display: none;
  }
  .caixa_h1 h1{
    color: white;
    font-size: 3em;
  }
  
  h3{
    font-size: 1.5em;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-weight: bold;
    margin: 20px 0 0 20px;
  }
  .caixa_images{

    display: flex;
    justify-content: space-between;
    background: #d3bbd3;
    margin-top: 100px;
    width: 90vw;
    height: 474.5px;
  }

  .caixa_texto_canvas{
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
  }
 


  .caixa_plan{
    width: 50%;
    height: 90%;
    
  }
  .caixa_plan img{
    width: 100%;
    height: 111%;

  }

  footer {
    background-color: #333;
    color: #fff;
    padding: 30px;
    text-align: center;
    margin-top: 200px;
    width: 100vw;
  }
  footer nav{
    margin-top: 10px;
  }
  .lista_footer{
    padding: 5px;
  }
  .lista_footer a{
    color: #d3bbd3;
  }

  .lista_footer a:hover{
    color: #066fc3;
  }

  @media only screen and (max-width: 765px) {
      .caixa_images{
        display: flex;
        flex-direction: column;
    }
    .caixa_plan img{
       height: 360px;
       margin-top: 26px;

    }
    #swot_img{
      height: 398px;

    }
    .caixa_texto_canvas, .caixa_plan{
       width: 100%;
    }
    .caixa_h1{
      display: none;
    }
    .div_mobile{
      display: flex;
      justify-content: center;
    }
    .div_mobile h1{
      padding-top: 10px;
      font-size: 1.5em;

    }
  
  }
</style>