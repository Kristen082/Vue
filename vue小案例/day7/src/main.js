import App from './App.vue'
import Vue from 'vue/dist/vue.esm.js';
// console.log(App);
// console.log(Vue);

new Vue({
    el:'#app',
    template:'<App />',
    components:{
        App
    }
    // render(h) {
    //     console.log(h(App));
    //     return h(App)
    // }
})

