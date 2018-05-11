<template>
  <div>
    请登录
    <x-button @click.native="toLogin">登录</x-button>
  </div>
</template>

<script>

export default {
  created() {
  },
  mounted() {
  },
  data() {
    return {
    };
  },
  methods: {
    toLogin() {
      sessionStorage.setItem('wuqian', 'yes');
      this.$router.push({ path: '/Apply' });
    },
  },
};
</script>

<style scoped>

</style>
