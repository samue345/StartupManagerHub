<script setup>
import { ref, reactive} from 'vue';
import { useCounterStore } from '/src/store/index.js'
import * as yup from 'yup';

const conter = useCounterStore();

const loginEmail = ref('');
const loginPassword = ref('');

const companyName = ref('');
const signupEmail = ref('');
const signupPassword = ref('');
const confirmPassword = ref('');
const errors = reactive({loginEmail: '', loginPassword: ''});
const errors_singup = reactive({ 
    companyName: '', 
    signupEmail: '', 
    signupPassword: '', 
    confirmPassword: ''
  });



const schema = yup.object().shape({

    loginEmail: yup.string().email().required()
    .matches( /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email inválido'),
    loginPassword: yup.string().required()
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'A senha deve conter pelo menos um caractere especial')
    .min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

const schema_singup = yup.object().shape({

  companyName: yup.string().required(),
  signupEmail: yup.string().email().required()
  .matches( /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email inválido'),
  signupPassword: yup.string().required()
  .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
  .matches(/[!@#$%^&*(),.?":{}|<>]/, 'A senha deve conter pelo menos um caractere especial')
  .min(8, 'A senha deve ter no mínimo 8 caracteres'),
  confirmPassword: yup.string().oneOf([yup.ref('signupPassword'), ''], 'A senhas não correspondem'),
  
});



const login = () => {

  const data = {loginEmail: loginEmail.value, loginPassword: loginPassword.value};

  schema.validate(data).then((valid) => {
      conter.login(loginEmail.value, loginPassword.value);
  })
  .catch((error) => {
    errors[error.path] = error.message;

  });

};

const signup = () => {

  const data = {
    companyName: companyName.value, 
    signupEmail: signupEmail.value, 
    signupPassword: signupPassword.value, 
    confirmPassword: confirmPassword.value
  };

  schema_singup.validate(data).then((valid) => {
      conter.register(companyName.value, signupEmail.value, signupPassword.value);

  })
  .catch((error) => {
    errors_singup[error.path] = error.message;
    console.log("error:", errors, "dggdgdgd", errors[error.path])

  });

};


const loginWithGoogle = () => {
  console.log('Fazendo login com o Google');
};
</script>


<template>
      <section class="auth-container">
        <form class="login" @submit.prevent="login">
          <h2>Login</h2>
          <input class="inputs_info" type="email" id="loginEmail" v-model="loginEmail" required placeholder="Email">
          <span class="error_message" v-if="errors.loginEmail">{{ errors.loginEmail }}</span>
          <input class="inputs_info" type="password" id="loginPassword" v-model="loginPassword" required placeholder="senha">
          <span class="error_message" v-if="errors.loginPassword">{{ errors.loginPassword }}</span>

          <footer>
            <button type="submit">Entrar</button>
             <button @click="loginWithGoogle">Login com Google</button>
          </footer>
        </form>

        <form class="signup" @submit.prevent="signup">
          <h2>Cadastro</h2>
          <input class="inputs_info" type="text" id="companyName" v-model="companyName" required placeholder="Nome da Empresa">
          <span class="error_message" v-if="errors_singup.companyName">{{ errors_singup.companyName }}</span>

          <input class="inputs_info" type="email" id="signupEmail" v-model="signupEmail" required placeholder="Email">
          <span class="error_message" v-if="errors_singup.signupEmail">{{ errors_singup.signupEmail }}</span>

          <input class="inputs_info" type="password" id="signupPassword" v-model="signupPassword" required placeholder="Senha">
          <span class="error_message" v-if="errors_singup.signupPassword">{{ errors_singup.signupPassword }}</span>

          <input class="inputs_info" type="password" id="confirmPassword" v-model="confirmPassword" required placeholder="Confirme a Senha">
          <span class="error_message" v-if="errors_singup.confirmPassword">{{ errors_singup.confirmPassword }}</span>

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
.error_message{
  color: red;
  font-size: 0.8em;
  position: relative;
  bottom: 20px;
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

  min-width: 5vw;
  max-width: 28vw;
  
}

footer {
  display: flex;

}

@media only screen and (max-width: 768px){

  .auth-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
   
    }
    .login, .signup{
      display: flex;
      align-items: center;
      width: 100vw;
      height: 100vh;

     }
     .inputs_info  {
        width: 70vw;
        height:40px;
     }
    button {
        width: 300vw;
        margin: 5px 0 5px 0;
  
    }
    footer {
      display: flex;
      flex-direction: column;

    }


     

}
</style>

  
