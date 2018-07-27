<template>
  <div>
    <panel header="我的新闻" :list="list" type="5"></panel>
  </div>
</template>

<script>
import moblie from '../../api/mobile';

export default {
  mounted() {
    console.log('我的新闻');
    this.dataList();
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    dataList() {
      moblie.getData().then((res) => {
        if (res.data.code === 0) {
          this.list = res.data.result.NewsList;
          console.log('res.data', res.data);
        }
      });
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
<style>
.weui-media-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.15);
}
.weui-media-box {
  transition: 0.3s;
}
</style>
