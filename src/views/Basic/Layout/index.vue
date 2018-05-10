<template>
  <div>

    <router-view></router-view>

    <tabNav v-if="isShow"></tabNav>

  </div>
</template>

<script>
import tabNav from './tabNav';

export default {
  mounted() {
    this.$router.push({ path: '/user' });
  },
  components: {
    tabNav,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>

</style>
