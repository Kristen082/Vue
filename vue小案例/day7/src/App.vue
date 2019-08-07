<template>
    <div>
        <my-list
        :grade="grade"
        :count="count"
        :styleObj="styleObj"
        :img="img"
        ></my-list>
    </div>
</template>
<script>
// 第一步引入组件
import myList from './componets/list.vue';
export default {
    data() {
        return {
            grade: "1701B",
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
        };
    },
    components:{ //注册组件
        myList
    },
    methods: {},
    created() {}
};
</script>