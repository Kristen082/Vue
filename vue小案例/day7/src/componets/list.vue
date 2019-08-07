<template>
    <div>
        <p>班级:{{grade}}</p>
        <p>人数:{{count}}</p>
    
         <img :src="item" alt="" v-for="(item,index) in img" :style="styleObj" :key="index">
    </div>
</template>
<script>
export default {
    props:['grade','count','styleObj','img']

}
</script>
