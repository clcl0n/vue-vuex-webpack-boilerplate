import Vue from 'vue';
import App from './App.vue';
import store from './store/index';

export default new Vue({
   el: '#app',
   store,
   render: h => h(App)
});