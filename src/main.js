import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';


import 'babel-polyfill';
import firebase from 'firebase'
import App from './App';
import router from './router.js';
import store from './store.js';
let app = '';
Vue.config.productionTip = false;



firebase.auth().onAuthStateChanged(user => {
  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
});