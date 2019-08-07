<template>
    <div id="app">
        <header>
            <span 
            v-for="(item,index) in typeList" 
            :key="index"
            :class="{'active': index == ind}"
            @click="changeList(index)"
            >{{item}}</span>
        </header>
        <section>
            <div v-if="list.length == 0">当前分类没有数据</div>
            <my-list
            v-for="(item,index) in list"
            :key="index"
            :title="item.title"
            :content="item.content"
            :time="item.time"
            :type="item.type"
            :bool="item.bool"
            v-else
            ></my-list>
        </section>
    </div>
</template>

<script>
import data from "./mock";
import myList from "./components/mylist";
export default {
    components: {
        myList
    },
    data(){
        return {
            ind:0,
            typeList:['未开始','未打卡','已打卡','全部'],
            list:[]
        }
    },
    created() {
        console.log(data);
        this.list = data.list.filter(item => item.type == 0);
    },
    methods: {
        changeList(ind){
            this.ind = ind;
            this.list = data.list.filter(item => item.type == ind);
        }
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
html,
body,
#app {
    height: 100%;
    width: 100%;
}
#app {
    display: flex;
    flex-direction: column;
}
header {
    height: 44px;
    width: 100%;
    display: flex;
    background: cornflowerblue;
}
header span {
    flex: 1;
    text-align: center;
    line-height: 44px;
    color: #fff;
}
.active {
    color: red;
}
section {
    flex: 1;
    overflow-y: auto;
}
</style>
