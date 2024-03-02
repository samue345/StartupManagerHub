<script setup>
    import { useCounterStore } from '/src/store/index.js'
    import { ref, onMounted } from 'vue';
    import router from  '../routes';
    import axios from '../axios';


    const conter = useCounterStore();
    const dropdownStates = ref(false);


    const toggle = () => dropdownStates.value = !dropdownStates.value;
    
    const isDropdownOpen = () => dropdownStates.value || false;
    
    const closeAllDropdowns = () =>  dropdownStates.value = false;

    const logout = () => {

       if (conter.verifyLog) 
       {
            const user = {
               startupID: conter.user_logado._id,
               refreshToken: localStorage.getItem('refreshToken')
            }
                        
            axios.post('/a/startup/logout', user).then((res) =>{

                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                conter.user_logado._id = '';
                conter.user_logado.nome = '';
                conter.user_logado.email = '';
                router.push('/')

            
            }).catch((error) =>{
                console.error('Erro ao enviar dados:', error);

            })
         

       } 

    };

    onMounted(() => {
      window.addEventListener('click', () => dropdownStates.value = false)

    });



</script>
<template>
    <header id="header_principal">
        <nav class="navegation_header">
            <ul class="flex" id="nav_lista">
            <li><RouterLink to="/swt">SWT</RouterLink></li>
            <li><RouterLink to="/canva">Canvas</RouterLink></li>
            <li><RouterLink to="/perguntas">4P´S</RouterLink></li>
            </ul>


            <div v-if="conter.verifyLog" @click.stop="toggle()" class="profile-circle">P</div>
            <div v-else>
                <router-link to="/auth"><button class="dropbtn">Entrar</button></router-link>
            </div>
            <div class="dropdown-content" v-if="isDropdownOpen()" id="myDropdown">
              <button @click="logout">Sair</button>
            </div>
          

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
      cursor: pointer;
}
.dropbtn{

    background-color: #1877f2; 
    margin-right: 20px;
    color: #fff;
    font-weight: bold;

}
.dropbtn:hover{
    color: #dcdcdc;
}

.dropdown-content  {
    
    margin-top:3px;
    position:absolute;
    min-width: 130px;
    top:65px;
    right:8px;
    background:#fff;
    box-shadow:0 8px 16px 0 rgba(0,0,0,.2);
    border:1px solid var(--color3);

}
.dropdown-content button{
    width: 100%;
    border-radius: 0;
    background-color: white;

}

.dropdown-content button:hover{
    background-color: #dcdcdc;
    border: none;

}



</style>