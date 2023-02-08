<template></template>

<script>
export default {
  methods: {
    // 获取滚动条当前位置
    getScrollTop() {
      let scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    },

    // 获取当前可视范围的高度
    getClientHeight() {
      let clientHeight = 0;
      // document.body看的是body的可视化高度
      // document.documentElement看的是html的可视化高度
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      } else {
        clientHeight = Math.max(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      }
      return clientHeight;
    },

    //获取文档完整的高度
    getScrollHeight() {
      return Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
    },
  },
  mounted() {
    //滚动事件触发
    var self = this;
    window.onscroll = function () {
      if (
        self.getScrollTop() + self.getClientHeight() >=
        self.getScrollHeight() - 300
      ) {
        console.log("到底部了");
        self.$emit("scroll-state", true);
        self.$store.dispatch("setAuthorStatic", self.$store.state.author);
      }
    };
  },
  destroyed() {
    window.onscroll = null;
  },
};
</script>

<style>
</style>