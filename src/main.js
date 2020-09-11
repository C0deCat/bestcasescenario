import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

export const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDhqNmqAsP5zycHllQL1c61EZnG7pMU4as",
  authDomain: "bestcasescenario-b973b.firebaseapp.com",
  databaseURL: "https://bestcasescenario-b973b.firebaseio.com",
  projectId: "bestcasescenario-b973b",
  storageBucket: "bestcasescenario-b973b.appspot.com",
  messagingSenderId: "225881601682",
  appId: "1:225881601682:web:14fe6d93f5abacf3b4d84b",
  measurementId: "G-B76ZLJ114F"
};
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
