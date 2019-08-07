<template>
  <div>
      <!-- <my-list :list="list">
        <div slot-scope="{item}">
           <span>{{item.name}}</span>
           <span>{{item.tag}}</span>
        </div>
      </my-list> -->
      <my-list :list="mylist"></my-list>
  </div>
</template>
<script>
import myList from "./components/mylist";
import axios from 'axios'
export default {
    props: {},
    components: {
        myList
    },
    data() {
        return {
          list:[
            {
              name:'四季度假酒店1',
              tag:'四星级'
            },
            {
              name:'四季度假酒店2',
              tag:'四星级'
            },
            {
              name:'四季度假酒店3',
              tag:'五星级'
            },{
              name:'四季度假酒店4',
              tag:'五星级'
            }
          ],
          mylist:[]
        };
    },
    computed: {},
    methods: {},
    created() {
      axios.get('/api/list').then((res)=>{
        console.log(res.data);
          this.mylist = res.data.list;
      });;
    },
    mounted() {}
};
</script>
<style  lang="">
</style>