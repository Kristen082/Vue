<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: "App"
};
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
.swiper-container{
  height: 200px;
  width: 100%;
}
.swiper-wrapper,.swiper-slide,img{
  height: 150px;
  width: 100%;
}

</style>
