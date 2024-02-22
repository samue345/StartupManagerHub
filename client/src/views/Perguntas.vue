<script setup>
  import { ref } from 'vue';
import Aside from '../components/Aside.vue'
  const preco = ref(null);

  const formatMoney = () => 
  {
    console.log(preco.value)

    preco.value = preco.value.replace(/\D/g, '');

    console.log(preco)

    if (preco.value.length > 0) {
        preco.value = parseFloat(preco.value) / 100; 
        preco.value = preco.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
 
     
  }

</script>
<template>
     <div class="flex">
        <Aside></Aside>
        <main class="conteudo_principal">
          <article>
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
          </article>
        </main>
    </div>
</template>
<style scoped>

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