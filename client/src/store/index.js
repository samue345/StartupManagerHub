import { defineStore } from 'pinia'
import axios from '../axios';

export const useCounterStore = defineStore('counter', {

    state: () => ({ user_logado: { _id: '', nome: '', email: '' }}),
    getters: {
        verifyLog: (state) => state.user_logado._id,
    },
    actions: {

        logado(email, password){
          
        },
       
  
    },
  })