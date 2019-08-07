<template>
  <div id="app">
    <div class="content">
        <div class="left">
            <ul>
              <li 
              v-for="(item,index) in classify"
              :key="index"
              :class="{'active':index == ind}"
              @click="change(index)"
              >
              {{item.title}}
              </li>
            </ul>
        </div>
        <div class="right">
            <my-list
             v-for="(item,index) in rightList"
             :key="index"
             :title="item.title"
             :price="item.price"
             :num="item.num"
             :id="item.id"
             :type="item.type"
            ></my-list>
        </div>
    </div>
    <footer>
      <my-dialog v-show="isShow" :buyList="buyList"></my-dialog>
      <div @click="isShow = !isShow">
        <span>总数：{{TotalCount}}</span>
        <span>总价：{{TotalPrice}}</span>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import myList from './components/list'
import myDialog from './components/dialog'
export default {
  name: 'App',
  components: {
    myList,
    myDialog
  },
  data(){
    return {
      ind:0,
      isShow:false,
       classify:[],
       list:[],
       rightList:[],
       buyList:[] //添加到购物车的数据
    }
  },
  computed: {
      TotalCount(){
        return this.buyList.reduce((prev,cur)=> prev+cur.num,0)
      },
      TotalPrice(){
        return this.buyList.reduce((prev,cur)=> prev + cur.num * cur.price,0)
      }
  },
  created() { 
      axios.get('/api/classify').then((res)=>{
        console.log(res);
        this.classify = res.data.classify;
      });
       axios.get('/api/list').then((res)=>{
        console.log(res);
        this.list = res.data.list;
        this.rightList = this.getList(this.classify[this.ind].type);  
      });
      //点击加号
      this.$bus.$on('changeCount',(id,num,type)=>{
        console.log(9999,id);
        let ind = this.list.findIndex(item => item.id == id);
        this.list[ind].num = num;

        let cur = this.buyList.findIndex(item => item.id == id);
        if(cur == -1){
          this.buyList.push(this.list[ind]);
        }
        console.log(this.buyList);

        let index = this.classify.findIndex(item => item.type == type);
        this.ind = index;
      });
  },
  methods: {
    getList(type){ //过滤数据的
      return this.list.filter(item => item.type == type);
    },
    change(ind){
      this.ind = ind;
      this.rightList = this.getList(this.classify[ind].type);  
    }
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,#app{
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
.content{
  flex: 1;
  display: flex;
}
.left{
  width: 120px;
  height: 100%;
  border-right: 1px solid #cccc;
}
.left li{
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.left li.active{
  color: red;
}
.right{
  flex: 1;
  height: 100%;;
}
footer{
  height: 50px;width: 100%;
  border-top: 1px solid #ccc;
}

</style>
