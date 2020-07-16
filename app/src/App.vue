<template>
  <div id="app">
    <div id="title">
      <span>日程</span>
    </div>
    <div id="foolt">
        <a href="#/" class="active"> 日程</a>
        <a href="#/no2">待办</a>
    </div>
    <div style="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style>
body{
  margin: 0;
}
#title{
  height:1rem;
  line-height: 1rem;
  text-align: center;
  background: #366cb3;
  box-shadow: 0rem .0625rem 0rem 0rem #dcdcdc; 
}
#title span{
  color: #ffffff;
  /* font-size:1.125rem; */
}
#foolt{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2.9375rem;
  line-height: 2.9375rem;
  display: flex;
  background: rgba(255,255,255,0.94);
  border-top: .0625rem solid rgba(0,0,0,0.3);
}
#foolt span{
  text-align: center;
  flex: 1;
}
.active{
  color: #366cb3;
}
.box{
  width: 23.4375rem;
}
</style>
