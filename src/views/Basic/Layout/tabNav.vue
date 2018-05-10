<template>
  <div>
    <tabbar @on-index-change="wuqian">
      <tabbar-item>
        <i slot="icon" class="icon iconfont icon-shu"></i>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item selected>
        <i slot="icon" class="icon iconfont icon-biao"></i>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item>
        <!--<img slot="icon" src="../assets/img/user2.png">-->
        <i slot="icon" class="icon iconfont icon-wo"></i>
        <span slot="label">Explore</span>
      </tabbar-item>
    </tabbar>
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
    wuqian(val) {
      console.log(val);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
