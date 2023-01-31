<template>
  <div class="paper_class">
    <div class="left">
      <div class="title">{{ paper.title }}</div>
      <div class="content">
        {{ paper.content }}
      </div>
      <div class="bottom">
        <div class="look">
          <i class="iconfont icon-zuanshi"></i>
          {{ paper.look }}
        </div>
        <div class="author_name">
          <a href="/">{{ paper.name }}</a>
        </div>
        <div class="message">
          <i class="iconfont icon-msg"></i>
          <a href="/">{{ paper.message }}</a>
        </div>
        <div class="like">
          <i class="iconfont icon-shixin"></i>
          {{ paper.like }}
        </div>
        <div class="money" v-if="paper.money !== 0">
          <i class="iconfont icon-shang"></i>
          {{ paper.money }}
        </div>
      </div>
    </div>
    <div class="right" v-if="paper.img">
      <img :src="paper.img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["paper", "index"],
  mounted() {
    console.log(this.index);
  },
};
</script>

<style lang="less" scoped>
.paper_class {
  display: flex;
  .left {
    width: auto;
    margin: 10px;
    .title {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 10px;
      margin-top: 15px;
    }
    .content {
      font-size: 14px;
      color: #999999;
      margin-bottom: 10px;
      line-height: 25px;
    }
    .bottom {
      display: flex;
      margin-bottom: 15px;
      div {
        margin-right: 15px;
        color: #999999;
        a {
          color: #999999;
        }
      }
      .look {
        color: #ea6f5a;
      }
    }
  }
  .right {
    width: 150px;
    height: 100px;
    // background-color: red;
    flex-shrink: 0;
    margin-top: 30px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 7px;
    }
  }
}
</style>