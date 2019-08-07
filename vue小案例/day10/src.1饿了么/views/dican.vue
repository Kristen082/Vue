<template>
    <div class="content">
        <div class="left">
            <ul>
                <li v-for="(item,index) in list" :key="index" :class="{'active':index == ind}" @click="goToRight(index)">{{item.name}}</li>
            </ul>
        </div>
        <div class="right">
            <div ref="rightList">
                <my-list v-for="(item,index) in list" :key="index" :name="item.name" :foods="item.foods"></my-list>
            </div>
        </div>
    </div>
</template>
<script>
import myList from "../components/list";
import axios from "axios";
import BScroll from "better-scroll";
export default {
    props: {},
    components: {
        myList
    },
    data() {
        return {
            ind: 0,
            scrollY: 0,
            scrollH: [],
            leftBScroll: null,
            rightBScroll: null,
            list: []
        };
    },
    computed: {
        currentIndex(){
            for(let j = 0; j < this.scrollH.length;j++){
                let height1 = this.scrollH[j];
                let height2 = this.scrollH[j+1];
                if(height2 && (this.scrollY > height1 && this.scrollY <height2)){
                    return j;
                }
            }
            return 0;
        }
    },
    methods: {
        init() {
            this.leftBScroll = new BScroll(".left", {
                click: true
            });
            this.rightBScroll = new BScroll(".right", {
                probeType: 3
            });

            this.rightBScroll.on("scroll", res => {
                this.scrollY = Math.abs(res.y);
                console.log(this.scrollY);
                this.ind = this.currentIndex;
                console.log(this.currentIndex,'currentIndex');
            });
        },
        goToRight(ind) {
            //滚动到右侧对应位置
            console.log("right", ind, this.$refs.rightList);
            let children = this.$refs.rightList.children;
            this.ind = ind;
            this.rightBScroll.scrollToElement(children[ind], 100);
        },
        scrollHeight() {
            let height = 0;
            let children = this.$refs.rightList.children;
            this.scrollH.push(height);
            for (let i = 0; i < children.length; i++) {
                height += children[i].offsetHeight;
                this.scrollH.push(height);
            }
            console.log(this.scrollH);
        }
    },
    created() {
        axios.get("/api/shop").then(res => {
            this.list = res.data.list.goods;
            console.log(res.data.list.goods);
            this.$nextTick(() => {
                this.init();
                this.scrollHeight();
            });
        });
    },
    mounted() {}
};
</script>
<style scoped lang="">
.content {
    width: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
}
.left {
    width: 120px;
    height: 100%;
}
.left li {
    background: cornflowerblue;
    line-height: 44px;
    text-align: center;
}
.left li.active {
    background: red;
}
.right {
    flex: 1;
    height: 100%;
}
</style>