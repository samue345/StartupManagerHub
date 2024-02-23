<script setup>

</script>
<template>
    <header id="header_principal">
        <nav class="navegation_header">
            <ul class="flex" id="nav_lista">
            <li><RouterLink to="/swt">SWT</RouterLink></li>
            <li><RouterLink to="/canva">Canvas</RouterLink></li>
            <li><RouterLink to="/perguntas">4P´S</RouterLink></li>
            </ul>
            <div class="profile-circle">P</div>

        </nav>
    </header>
    <div style="height: 62px;"></div>

  

</template>

<style scoped>

#header_principal{
    width: 100%;
    position: fixed;
    border: 1px solid #dcdcdc;
    top:0;
    z-index: 7000;
    background-color: #fff;

}

.navegation_header{
    align-items: center;
    display: flex;
    justify-content: space-between;

}

#nav_lista{
    margin: 10px;
}

#nav_lista li{
    padding: 10px;
}

.profile-circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #1877f2; 
      margin-right: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}




</style>