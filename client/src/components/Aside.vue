<script setup>

</script>

<template>
    
    <aside id="aside_vertical">
        <nav>
            <ul class="">
                <li class="item_lista_nav"><RouterLink to="/swt">Minha SWT</RouterLink></li>
                <li class="item_lista_nav"><RouterLink to="/canva">Meu modelo canvas</RouterLink></li>
                <li class="item_lista_nav">meus 4P´S</li>
            </ul>
        </nav>
    </aside>
  
</template>
<style scoped>

.item_lista_nav{
    width: 100%;
    padding: 20px 10px 20px 10px;


}
#aside_vertical{
    margin: 50px 0 0 2vw;
    min-width: 200px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    max-height: 190px;


}

aside > nav{
    width: 100%;

}


</style>