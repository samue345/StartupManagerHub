import { defineStore } from 'pinia'
import axios from '../axios';
import router from  '../routes';

export const useCounterStore = defineStore('counter', {

    state: () => ({ user_logado: { _id: '', nome: '', email: '' }}),
    getters: {
        verifyLog: (state) => state.user_logado._id,
    },
    actions: {

        setUser(startup, accessToken, refreshToken){

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken',  refreshToken);
            this.user_logado = {...startup};
            router.push('/swt');


        },
        login(email, password){

           const login = {
                email,
                password
            }
            axios.post('/g/startup/login', login)
            .then(res =>{
                this.setUser(res.data.startup, res.data.accessToken, res.data.refreshToken);
            })
            .catch(err =>{
                console.error(err)
            })
        },
        register(name, email, password){

            const register = {name, email,password}

            axios.post('/g/startup/register', register)
            .then(res =>{
                this.setUser(res.data.startup, res.data.accessToken, res.data.refreshToken);

            })
            .catch(err =>{
                 console.error(err)
            })
         },
       
  
    },
  })