<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>


export default {
  mounted() {
    console.log('我的新闻');
  },
  data() {
    return {
      msg: '我的新闻',
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
