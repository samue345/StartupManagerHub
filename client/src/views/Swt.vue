<script setup>
  import Aside from '../components/Aside.vue'
    import { ref, onMounted } from 'vue';
  

    onMounted(() => {
        console.log('hdhdhd')
    });


</script>
<template>
  <div class="flex">
      <Aside></Aside>
    <main class="conteudo_principal">
        <h1>Matriz SWT</h1>
        <article class="">
                <div id="matriz">
                    <section class="matriz_swt caixas_superiores">
                        <div class="flex">
                        <h4 class="subtitles">Forças</h4><span> <img class="icons_swt" src="../assets/strengh.svg" alt="icon strengh"></span> 
                       </div>
                      <div class="editor">
                        <quill-editor theme="snow" class="text_editor" style="height: 225px;"></quill-editor>
                      </div>
                    </section>
                    <section class="matriz_swt caixas_superiores" style="border-right: none;">
                        <div class="flex" id="caixa_fraquezas">
                          <h4 class="subtitles">Fraquezas</h4><img class="icons_swt" src="../assets/weakness.svg" alt="icon weakness">
                        </div>
                        <div class="editor">
                         <quill-editor theme="snow" class="text_editor" style="height: 225px;"></quill-editor>
                        </div>
                    </section>
                    <section class="matriz_swt caixas_inferiores">
                        <div class="flex" style="  margin-bottom: 7px;">
                          <h4 class="subtitles">Oportunidades</h4><img class="icons_swt" src="../assets/bullseye_arrow.svg" alt="icon bullseye_arrow">
                        </div>
                        <div class="editor">
                         <quill-editor theme="snow" class="text_editor" style="height: 225px;"></quill-editor>
                        </div>

                    </section>
                    <section class="matriz_swt caixas_inferiores" style="border-right: none;">
                        <div class="flex" id="caixa_ameacas">
                          <h4 class="subtitles">Ameaças</h4><img class="icons_swt" id="icon_excla" src="../assets/excla.svg" alt="icon excla">
                        </div>
                        <div class="editor">
                          <quill-editor theme="snow" style="height: 225px;"></quill-editor>
                       </div>
                    </section>
                </div>
        </article>
    </main>
  </div>
</template>
<style scoped>
#matriz{
    margin: 30px auto 20px;
    display: grid;
    grid-template-columns: repeat(2, 32vw); 
}

.matriz_swt{
   min-height: 300px; 
   border: 1px solid gray;
}

#caixa_fraquezas, #caixa_ameacas{
  padding: 2px 0 1px 10px;
  margin-bottom: 4px;

}
.caixas_inferiores{
    border-bottom: none;
    border-left: none;
}
.caixas_inferiores h4, .caixas_inferiores img{
    margin-top: 5px;
}
.caixas_superiores{
    border-top: none;
    border-left: none;

}

.icons_swt{
    width: 25px;
    height: 25px;
    margin: 1px 0 0 10px;
    
}
#icon_excla{
    width: 5px;
}


@media only screen and (max-width: 780px){

    #matriz{

        display: grid;
        grid-template-columns: repeat(1, 60vw); 


   }
   .caixas_inferiores, .caixas_superiores, #caixa_fraquezas, #caixa_ameacas{
     border: 1px solid gray;
     padding: 0;

   }
   .matriz_swt h4, .matriz_swt img{
      margin: 5px;
    }
    .matriz_swt{
      margin-right: 5px;
    }

}
@media only screen and (max-width: 675px){

   #matriz{
     grid-template-columns: repeat(1, 80vw); 
     margin: 0;
   }
   #aside_vertical{display: none;}   

}
</style>