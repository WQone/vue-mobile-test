<template>
  <div>

  </div>
</template>

<script>

export default {
  created() {
  },
  mounted() {
    const data = sessionStorage.getItem('wuqian');
    if (!data) {
      this.$router.push({ path: '/Login' });
    } else {
      this.$router.push({ path: '/Apply' });
    }
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>

</style>
