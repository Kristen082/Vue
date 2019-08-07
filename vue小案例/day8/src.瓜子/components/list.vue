<template>
    <div>
        <p>班级:{{grade}}</p>
        <p>人数:{{count}}</p>
        <button @click="$emit('addCount',index,aa)">点击</button>
        <img :src="item" alt="" v-for="(item,index) in img" :key="index" :style="styleObj">
    </div>
</template>
<script>
export default {
    // props:['grade','count','styleObj','img'],
    // props:{
    //     grade:String,
    //     count:Number,
    // },
    props: {
        grade: String,
        index:Number,
        count: {
            type: Number,
            required: true,
            default: 42
        },
        styleObj:{
            type:Object
        },
        img: {
            type: Array,
            default() {
                return [
                    "http://img02.tooopen.com/images/20150507/tooopen_sy_122395947985.jpg",
                    "http://pic36.nipic.com/20131213/6704106_223232205107_2.png",
                    "http://img.zcool.cn/community/01b078574706206ac72525ae0beaed.jpg@2o.jpg"
                ]
            }
        }
    },
    data() {
        return {
            aa:11
        };
    },
    created() {
        console.log(this);
    },
    methods: {
        // btnClick(){ //vue是单向数据流，不能在子组件里面直接修改父组件传递过来的值
        //     this.count++;
        // }
    },
};
</script>
