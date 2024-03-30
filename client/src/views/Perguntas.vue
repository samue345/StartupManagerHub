<script setup>
  import Aside from '../components/Aside.vue'
  import { onMounted, watchEffect, ref} from 'vue';
  import axios from '../axios';
  import { useCounterStore } from '/src/store/index.js'
  const preco = ref(null), produto = ref(null), praca = ref(null), promocao = ref(null);
  const counter = useCounterStore();

  const formatMoney = () => 
  {

    preco.value = preco.value.replace(/\D/g, '');

    if (preco.value.length > 0) {
        preco.value = parseFloat(preco.value) / 100; 
        preco.value = preco.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
 
     
  }

  

  const fetchPerguntas = (startupID) => {
    axios.get(`/a/pergunta/find/${startupID}`)
      .then((res) => {
        console.log(res)
            preco.value = res.data.perguntas.preco;
            produto.value = res.data.perguntas.produto; 
            praca.value = res.data.perguntas.praca;
            promocao.value = res.data.perguntas.promocao;

      })
      .catch(err => {
        console.error(err);
      });
  };

  onMounted(() => {
    if (counter.user_logado._id) {
      fetchPerguntas(counter.user_logado._id);
    }
  });

  watchEffect(() => {
    if (counter.user_logado._id) {
      fetchPerguntas(counter.user_logado._id);

    }
  });

  const createPerguntas = () => {
        
        const perguntas = {
            startupID: counter.user_logado._id, 
            preco: preco.value, 
            produto: produto.value, 
            praca: praca.value, 
            promocao: promocao.value
        }
        axios.post('/a/pergunta/create', perguntas).catch(err => { console.error(err) });
   };

</script>
<template>
     <div class="flex">
        <Aside></Aside>
        <main class="conteudo_principal">
          <article>
            <form  @submit.prevent="createPerguntas">
                <h1>4Ps do Marketing</h1>
                <section class="caixa_marketing">
                    <label for="produto">Produto:</label>
                    <input v-model="produto" id="produto" type="text" />
                </section>
                <section class="caixa_marketing">
                    <label for="preco">Preço:</label>
                <input v-model="preco" id="preco" type="text" @input="formatMoney" placeholder="0,00"/>
                </section>
                <section class="caixa_marketing">
                    <label for="praca">Praça:</label>
                    <input v-model="praca" id="praca" type="text" />
                </section>
                <section class="caixa_marketing">
                    <label for="promocao">Promoção:</label>
                    <input v-model="promocao" id="promocao" type="text" />
                </section>
                <button type="submit" class="button_save_data" style="width: 40vw; margin-left: 22px;"> Salvar</button>
            </form>

          </article>
          
           <section id="grid_p">
                <article>
                    <h1 >Produto:</h1>
                    <p  class="pagrafo_4ps">{{produto}}</p>
                </article>
                <article>
                    <h1>Preço:</h1>
                    <p  class="pagrafo_4ps">{{preco}}</p>
                </article>
                <article>
                    <h1>Praça:</h1>
                    <p  class="pagrafo_4ps">{{praca}}</p>
                </article>
                <article>
                    <h1>Promoção:</h1>
                    <p  class="pagrafo_4ps">{{promocao}}</p>
                </article>
           </section>
        </main>
    </div>
   
</template>
<style scoped>


#grid_p{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 20px;
    padding: 10px;
}
.pagrafo_4ps{
    margin: 10px 0 20px 0;
}
.caixa_marketing{
    display: flex;
    flex-direction: column;
    padding: 20px;

}
.caixa_marketing input{ 
    width: 40vw;
    height: 6vh;
    margin: 10px 0 0 0;
    padding-left: 5px;

}
.caixa_marketing label{ 
   font-weight: bold;

}
</style>