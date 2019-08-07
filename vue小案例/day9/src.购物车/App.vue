<template>
  <div id="app">
    <section>
      <div class="list">
        <my-list
        v-for="(item,index) in list"
        :key="index"
        :title="item.title"
        :newPrice="item.newPrice"
        :oldPrice="item.oldPrice"
        :id="item.id"
        :num="item.num"
        @change="change"
        ></my-list>

      </div>
    </section>
    <footer>
      <span>总数：{{totalCount}}</span>
      <span>总价：{{totalnewPrice}}</span>
      <span>优惠：{{totaloldPrice-totalnewPrice}}</span>
    </footer>
  </div>
</template>

<script>
import myList from './components/list'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    myList
  },
  data(){
    return {
      list:[],
      buyList:[]
    }
  },
  computed: {
    totalCount(){
      return this.buyList.reduce((prev,cur) => prev+cur.num,0);
    },
    totalnewPrice(){
      return this.buyList.reduce((prev,cur) => prev+cur.num * cur.newPrice,0);
    },
    totaloldPrice(){
      return this.buyList.reduce((prev,cur) => prev+cur.num * cur.oldPrice,0);

    }
  },
  created() {
    axios.get('/api/list').then((res)=>{
      console.log(res);
      this.list = res.data.list;
    });

  },
  methods: {
    change(id){
       let ind = this.list.findIndex(item => item.id == id);
       this.list[ind].num++;
       let cur = this.buyList.findIndex(item => item.id == id);
       if(cur == -1){
        this.buyList.push(this.list[ind]);
       }
       console.log(this.buyList);
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list{
  display: flex;
  flex-wrap: wrap;
 
}
</style>
