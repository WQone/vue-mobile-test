<template lang="pug">
 .hello
    p {{msg}}
    .wuqian 88
      span 77
      .wuqian-a 77
    x-button(@click.native="outLogin") 退出
</template>

<script>
//  <div class="hello">
//     <p>{{msg}}</p>
//     <div class="wuqian">88
//       <span>77</span>
//       <p class="wuqian-a">77</p>
//     </div>
//     <x-button @click.native="outLogin">退出</x-button>
//   </div>
export default {
  mounted() {
    console.log('我的信息');
  },
  data() {
    return {
      msg: '我的信息',
    };
  },
  methods: {
    outLogin() {
      sessionStorage.removeItem('wuqian');
      this.$router.push({ path: '/Login' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  width: 100px;
}
</style>
<style lang="stylus">
.wuqian {
  color: green;
  font-size: 20px;

  span {
    color: red;
  }

  &-a {
    color: yellow;
  }
}
</style>
