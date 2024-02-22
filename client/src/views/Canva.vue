<script setup>
  import Aside from '../components/Aside.vue'



</script>
<template>
    <div class="flex">
        <Aside></Aside>
        <main class="conteudo_principal">
            <article>
                <h1>Plano de negócios canvas</h1>

                <div id="canvas">
                    <section class="caixa">
                        <header>
                          <h4>Parcerias chave</h4>
                       </header>
                       <quill-editor theme="snow" style="border: none;"></quill-editor>

                    </section>
                    <section class="caixa">
                        <section class="caixas_intercaladas">
                          <header>
                            <h4>Atividades chave</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;"></quill-editor>

                        </section>
                        <section>
                          <header>
                             <h4>Recursos chave</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;"></quill-editor>


                        </section>
                    </section>
                    <section class="caixa">
                       <header>
                         <h4>Proposta de valor</h4>
                       </header>
                       <quill-editor theme="snow" style="border: none;"></quill-editor>

                    </section>
                    <section class="caixa">
                        <section class="caixas_intercaladas">
                           <header>
                            <h4>Relacionamento com os clientes</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;"></quill-editor>

                        </section>
                        <section >
                          <header>
                            <h4> Canais</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;"></quill-editor>

                        </section>
                    </section>  
                    <section class="caixa">
                        <header>
                          <h4>Segmento de clientes</h4>
                        </header>
                        <quill-editor theme="snow" style="border: none;"></quill-editor>

                    </section>  

                    <section class="caixa_inferiores">
                        <section class="caixa_inferior_interna">
                          <header>
                            <h4>Custos</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;"></quill-editor>

                        </section>
                        <section  class="caixa_inferior_interna">
                          <header>
                            <h4>Fontes de receita</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;"></quill-editor>

                        </section>
                    </section>  
                
            </div> 
            
            </article>

        </main>
   </div>
</template>
<style scoped>



    #canvas{
        display: grid;
        grid-template-columns: repeat(5, 15vw);
    }


    .caixa, .caixa_inferiores{
        border: 1px solid gray;
    }
    header{
        background-color: #2ED8EB;
        color: black;
        box-shadow:0 2px 4px rgba(0,0,0,.3);
        font-weight: bold;

    }
    .caixa_inferiores{
        display: flex;
        width: 75vw;
    }
  
    .caixa_inferior_interna{
        width: 50%;
        border-right: 1px solid gray;

    }
    .caixas_intercaladas{
        border-bottom: 1px solid gray;
    }
    

    @media only screen and (max-width: 1139px){

        #canvas{
        grid-template-columns: repeat(4, 15vw); 
        }
        .caixa_inferiores{
          width: 45vw;
        }


    }
    @media only screen and (max-width: 850px){
        #canvas{
          grid-template-columns: repeat(5, 17vw); 
          margin: 10px 0 0 0;
        }

        #aside_vertical{display: none;}   

        .caixa_inferiores{
          width: 85vw;
        }

  
    }
    @media only screen and (max-width: 768px){
        #canvas{
          grid-template-columns: repeat(2, 40vw); 

          margin: 10px 0 0 0;
        }


        .caixa_inferiores{
          width: 40vw;
          display: block;

        }
        .caixa_inferior_interna{
            width: 100%;
        }
     
  
    }
    @media only screen and (max-width: 430px){
        #canvas{
          grid-template-columns: repeat(1, 80vw); 
          margin: 10px 0 0 0;
        }
        .caixa_inferiores{
          width: 80vw;

        }

    }
    

</style>