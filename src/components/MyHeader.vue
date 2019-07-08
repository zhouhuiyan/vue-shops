<template>
  <div class="hello">
    {{ hello }}
    <p v-html="msg">111</p>
    <p v-text="msg"></p>
    <p>{{ num + 1}}</p>
    <p v-for="item in list" :key="item.price">
      商品{{item.name}} -----价格 {{item.price}}
    </p>
    <p v-for="(item,index) in list" :key="index" v-text="'商品'+item.name+' -----价格 '+item.price"></p>
    <input  @keydown.13="keydown" type="text">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 data(){
   return{
     hello:'world!',
     msg:'<h1>hello world</h1>',
     num:1,
     list:[
       {
         name:'apple',
         price:23
       },
        {
         name:'orange',
         price:31
       },
        {
         name:'banana',
         price:13
       },
        {
         name:'pan',
         price:15
       }
     ]
   }
 },
 methods:{
   keydown(){
     console.log('keydown enter');
   }
 }
}
</script>

<style lang="less">

</style>
