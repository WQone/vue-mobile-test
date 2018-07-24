<template>
  <div style="height:100%;">
    <div v-if="isShow" style="height:100%;">
      <view-box ref="viewBox">
        <router-view></router-view>
        <tabNav v-if="isShowNav" slot="bottom"></tabNav>
      </view-box>
    </div>
    <div v-else>
      死去登录
    </div>
  </div>
</template>

<script>
import tabNav from './tabNav';

export default {
  mounted() {
    this.isShow = sessionStorage.getItem('wuqian');
    if (!this.isShow) {
      this.$router.push({ path: '/login' });
    }
  },
  components: {
    tabNav,
  },
  data() {
    return {
      isShow: null,
    };
  },
  computed: {
    //  是否显示底部菜单
    isShowNav() {
      const arr = ['/Apply', '/User', '/Message', '/News'];
      if (arr.indexOf(this.$route.path) > -1) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
</style>
