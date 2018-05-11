<template>
  <div>
    <tabbar @on-index-change="wuqian">
      <tabbar-item :link="item.path" v-for="(item, index) in tabbarArr" :key="index" :selected="$route.path === item.path">
        <i slot="icon" class="icon iconfont" :class="item.icon"></i>
        <span slot="label">{{item.name}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

export default {
  mounted() {
  },
  data() {
    return {
      tabbarArr: [{
        name: '新闻',
        icon: 'icon-shu',
        path: '/News',
      }, {
        name: '应用',
        icon: 'icon-biao',
        path: '/Apply',
      }, {
        name: '消息',
        icon: 'icon-xiaoxi',
        path: '/Message',
      }, {
        name: '我的',
        icon: 'icon-wo',
        path: '/User',
      }],
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
