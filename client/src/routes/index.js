import {createRouter, createWebHistory} from 'vue-router';


import Swt from "../views/Swt.vue"
import Canva from "../views/Canva.vue"
import Perguntas from "../views/Perguntas.vue"
import Home from "../views/Home.vue"
import Auth from "../views/Auth.vue"


const routes = [
  
  { path: '/', component: Home},
  {path: '/swt', component: Swt},
  { path: '/canva', component: Canva},
  { path: '/perguntas', component: Perguntas},
  { path: '/auth', component: Auth},



]


const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.isAuth)) 
  {
    if (!localStorage.getItem('accessToken')) 
      next('/login');

    else 
      next();
  }
  else next();


});


export default router;
