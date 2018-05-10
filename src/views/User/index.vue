<template>
  <div class="hello">
    <p>{{msg}}</p>
  </div>
</template>

<script>


export default {
  mounted() {
    console.log('userInfo');
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
p {
  width: 100px;
}
</style>
