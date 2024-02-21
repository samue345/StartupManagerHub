<script setup>
</script>
<template>
    <main class="conteudo_principal">
        <article>
            <h1>Plano de negócios canvas</h1>

            <div id="canvas">
                <section class="caixa">
                    <h4>Parcerias chave</h4>
                </section>
                <section class="caixa">
                    <section class="caixas_intercaladas">
                        <h4>Atividades chave</h4>
                    </section>
                    <section class="caixas_intercaladas">
                        <h4>Recursos chave</h4>

                    </section>
                </section>
                <section class="caixa">
                    <h4>Proposta de valor</h4>
                </section>
                <section class="caixa">
                    <section class="caixas_intercaladas">
                        <h4>Relacionamento com os clientes</h4>
                    </section>
                    <section class="caixas_intercaladas">
                       <h4> Canais</h4>
                    </section>
                </section>  
                <section class="caixa">
                    <h4>Segmento de clientes</h4>
                </section>  

                <section class="caixa_inferiores">
                    <section class="caixa_inferior_interna">
                        <h4>Custos</h4>
                    </section>
                    <section  class="caixa_inferior_interna">
                        <h4>Fontes de receita</h4>
                    </section>
                </section>  
               
           </div> 
          
        </article>

    </main>
    <aside class="esconde">
    </aside>
</template>
<style scoped>

    #canvas{
        display: grid;
        grid-template-columns: repeat(5, 15vw);
        grid-template-rows: 400px 100px;
    }
    .caixa, .caixa_inferiores{
        border: 1px solid red;
    }
    .caixa_inferiores{
        display: flex;
        width: 75vw;
    }
    .caixas_intercaladas{
        height: 50%;
        border-bottom: 1px solid red;

    }
    .caixa_inferior_interna{
        width: 50%;
        border-right: 1px solid red;

    }

</style>