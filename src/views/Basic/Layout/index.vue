<template>
  <div>
    <div v-if="isShow">
      <router-view></router-view>
      <tabNav v-if="isShowNav"></tabNav>
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
