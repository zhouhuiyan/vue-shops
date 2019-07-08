<template>
  <div id="app">
    <!-- <my-header/> -->
    <com></com>
  </div>
</template>

<script>
import myHeader from './components/MyHeader.vue';
import com from './views/test/views/com.vue';

export default {
  name: 'app',
  components: {
    myHeader,
    com
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
