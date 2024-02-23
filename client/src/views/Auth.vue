<script setup>
import { ref } from 'vue';

const loginEmail = ref('');
const loginPassword = ref('');

const companyName = ref('');
const signupEmail = ref('');
const signupPassword = ref('');
const confirmPassword = ref('');

const login = () => {
  // Lógica para login aqui
  console.log('Login:', loginEmail.value, loginPassword.value);
};

const signup = () => {
  // Lógica para cadastro aqui
  console.log('Cadastro:', companyName.value, signupEmail.value, signupPassword.value, confirmPassword.value);
};

const loginWithGoogle = () => {
  // Lógica para login com o Google aqui
  console.log('Fazendo login com o Google');
};
</script>


<template>
      <section class="auth-container">
        <form class="login" @submit.prevent="login">
          <h2>Login</h2>
          <input class="inputs_info" type="email" id="loginEmail" v-model="loginEmail" required placeholder="Email">
          <input class="inputs_info" type="password" id="loginPassword" v-model="loginPassword" required placeholder="senha">

          <footer>
            <button type="submit">Entrar</button>
             <button @click="loginWithGoogle">Login com Google</button>
          </footer>
        </form>

        <form class="signup" @submit.prevent="signup">
          <h2>Cadastro</h2>
          <input class="inputs_info" type="text" id="companyName" v-model="companyName" required placeholder="Nome da Empresa">
          <input class="inputs_info" type="email" id="signupEmail" v-model="signupEmail" required placeholder="Email">
          <input class="inputs_info" type="password" id="signupPassword" v-model="signupPassword" required placeholder="Senha">
          <input class="inputs_info" type="password" id="confirmPassword" v-model="confirmPassword" required placeholder="Confirme a Senha">

          <button type="submit">Cadastrar</button>
        </form>
      </section>
</template>

<style scoped>

.auth-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
}

form {
  margin-top: 20px;
  width: 45%;
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

.login{
  padding-left: 20px;
  border-right: 1px solid gray;
  margin: 0 auto;
}

.login h2{
  margin: 22px 0 20px 0;
}
.signup h2{
    margin-bottom: 20px;
}
.inputs_info  {
    margin-top:1px;
    margin-bottom:25px;
    width: 28vw;
    height:40px;
    padding:3px
}
label{
  margin: 10px 0 10px 0;
  font-weight: bold;

}

button {
  background-color: #066fc3;
  color: #f2f4f6;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;

  min-width: 100px;
  max-width: 430px;
  
}

footer {
  display: flex;

}
</style>

  
