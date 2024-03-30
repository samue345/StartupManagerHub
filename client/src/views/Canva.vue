<script setup>
  import Aside from '../components/Aside.vue'
  import { useCounterStore } from '/src/store/index.js'
  import { onMounted, watchEffect, ref, reactive} from 'vue';
  import axios from '../axios';

  const counter = useCounterStore();

  const canvas = reactive({

      keyPartners: '', 
      keyActivities: '', 
      valuePropositions: '', 
      relatiCustomers: '',
      customerSegment: '',
      keyResources: '',
      channel: '',
      costs: '', 
      revenues: '',

    });
  
     
  const createCanvasEditor = () => {
     canvas.startupID = counter.user_logado._id;
     axios.post('/a/canvas/create', canvas).catch(err => { console.error(err) });
  };

  const fetchCanvas = (userId) => {
    axios.get(`/a/canvas/find/${userId}`)
      .then((res) => {
        Object.assign(canvas, res.data.canvas)

      })
      .catch(err => {
        console.error(err);
      });
  };

  onMounted(() => {
    if (counter.user_logado._id) {
      fetchCanvas(counter.user_logado._id);
    }
  });

  watchEffect(() => {
    if (counter.user_logado._id) {
      fetchCanvas(counter.user_logado._id);

    }
  });
</script>
<template>
    <div class="flex">
        <Aside></Aside>
        <main class="conteudo_principal">
            <article style="margin-bottom: 10px;">
                <h1 style="  font-synthesis: none; margin-bottom: 8px;">Plano de negócios canvas</h1>

                <div id="canvas">
                    <section class="caixa">
                        <header>
                          <h4 class="subtitles">Parcerias chave</h4>
                       </header>
                       <quill-editor theme="snow" style="border: none;" v-model:content="canvas.keyPartners" contentType="html"></quill-editor>

                    </section>
                    <section class="caixa">
                        <section class="caixas_intercaladas">
                          <header>
                            <h4 class="subtitles">Atividades chave</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;" v-model:content="canvas.keyActivities" contentType="html"></quill-editor>

                        </section>
                        <section>
                          <header>
                             <h4 class="subtitles">Recursos chave</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;" v-model:content="canvas.keyResources" contentType="html"></quill-editor>


                        </section>
                    </section>
                    <section class="caixa">
                       <header>
                         <h4 class="subtitles">Proposta de valor</h4>
                       </header>
                       <quill-editor theme="snow" style="border: none;" v-model:content="canvas.valuePropositions" contentType="html"></quill-editor>

                    </section>
                    <section class="caixa">
                        <section class="caixas_intercaladas">
                           <header>
                            <h4 class="subtitles">Relacionamento com os clientes</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;" v-model:content="canvas.relatiCustomers" contentType="html"></quill-editor>

                        </section>
                        <section >
                          <header>
                            <h4 class="subtitles"> Canais</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;" v-model:content="canvas.channel" contentType="html"></quill-editor>

                        </section>
                    </section>  
                    <section class="caixa">
                        <header>
                          <h4 class="subtitles">Segmento de clientes</h4>
                        </header>
                        <quill-editor theme="snow" style="border: none;" v-model:content="canvas.customerSegment" contentType="html"></quill-editor>

                    </section>  

                    <section class="caixa_inferiores">
                        <section class="caixa_inferior_interna">
                          <header>
                            <h4 class="subtitles">Custos</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;" v-model:content="canvas.costs" contentType="html"></quill-editor>

                        </section>
                        <section  class="caixa_inferior_interna">
                          <header>
                            <h4 class="subtitles">Fontes de receita</h4>
                          </header>
                          <quill-editor theme="snow" style="border: none;" v-model:content="canvas.revenues" contentType="html"></quill-editor>

                        </section>
                    </section>  
                
            </div> 
            
            </article>
            <button class="button_save_data" style="z-index: 1000; position: relative;" @click="createCanvasEditor">salvar</button>


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
        background-color: #066fc3;
        margin-bottom: 2px;
        padding: 3px;
        color: white;
        box-shadow:0 2px 4px rgba(0,0,0,.3);

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