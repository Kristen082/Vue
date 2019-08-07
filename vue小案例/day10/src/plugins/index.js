import myHeader from '@/components/myheader'
import Search from '@/components/search'
import myList from '@/components/list'
import axios from 'axios'
export default {
    install(Vue,options) { 
        console.log(Vue,options);
        Vue.component('myHeader', myHeader);
        Vue.component('Search', Search);
        Vue.component('myList', myList);
        Vue.prototype.$http = axios; 
    }
}