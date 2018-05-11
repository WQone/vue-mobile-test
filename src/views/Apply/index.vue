<template>
  <div>
    <group gutter="0">
      <cell title="公告">
        <marquee>
          <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">
            JavaScript is the best language{{i}}
          </marquee-item>
        </marquee>
      </cell>
    </group>
    <p>{{msg}}</p>
  </div>
</template>

<script>


export default {
  mounted() {
    console.log('我的应用');
  },
  data() {
    return {
      msg: '我的应用',
    };
  },
  methods: {
    onClick(i) {
      console.log(i);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  width: 100%;
  text-align: center;
}
</style>
<style>
.weui-cells:before {
  border-top: 0px !important;
}
</style>

