<template>
  <div class="hello">
    <p>{{msg}}</p>
    <tabNav></tabNav>
  </div>
</template>

<script>

import tabNav from '../../components/tabNav';

export default {
  mounted() {
    console.log('userInfo');
  },
  components: {
    tabNav,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 p{
   width:100px;
 }
</style>
