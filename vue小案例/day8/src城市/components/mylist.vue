<template>
    <div class="mylist">
        <div class="title">
            <h3>{{title}}</h3>
            <span>{{list[type]}}</span>
        </div>
        <p>{{content}}</p>
        <div class="title">
            <span>面试时间：{{time}}</span>
            <span>{{bool? '已提醒':'未提醒'}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['title','content','type','time','bool'],
    data(){
        return {
            list:['未开始','未打卡','已打卡','全部']
        }
    }
    // props:{

    // }
}
</script>
<style scoped>
.mylist {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
}
.title {
    display: flex;
    justify-content: space-between;
}
</style>

