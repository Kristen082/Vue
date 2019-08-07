<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <my-list 
    v-for="(item,index) in res"
    :key="index"
    :index="index"
    :grade="item.grade" 
    :count="item.count" 
    :img="item.img"
    :styleObj="item.styleObj" 
    @addCount="addClick"></my-list>

  </div>
</template>

<script>
import myList from "./components/list";

export default {
    name: "App",
    components: {
        myList
    },
    data() {
        return {
            res: [
                {
                    grade: "1701A",
                    count: 42,
                    styleObj: {
                        height: "120px",
                        width: "120px",
                        display: "inline-block"
                    },
                    img: [
                        "http://img02.tooopen.com/images/20150507/tooopen_sy_122395947985.jpg",
                        "http://pic36.nipic.com/20131213/6704106_223232205107_2.png",
                        "http://img.zcool.cn/community/01b078574706206ac72525ae0beaed.jpg@2o.jpg"
                    ]
                },
                {
                    grade: "1701B",
                    count: 40,
                    styleObj: {
                        height: "120px",
                        width: "120px",
                        display: "inline-block"
                    },
                    img: [
                        "http://img02.tooopen.com/images/20150507/tooopen_sy_122395947985.jpg",
                        "http://pic36.nipic.com/20131213/6704106_223232205107_2.png",
                        "http://img.zcool.cn/community/01b078574706206ac72525ae0beaed.jpg@2o.jpg"
                    ]
                }
            ]
        };
    },
    methods: {
        addClick(ind,aa) {
           this.res[ind].count++;
            console.log(ind,aa);
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
