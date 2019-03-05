import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ListCharacters from './components/ListCharacters.vue';
import CharacterDetail from './components/CharacterDetail.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes = [
  {
    name: 'index',
    path: '/',
    component: ListCharacters
  },
  {
    name: 'character',
    path: '/character/:id',
    component: CharacterDetail
  },
];



const router = new VueRouter({ mode: 'history', routes: routes });


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
