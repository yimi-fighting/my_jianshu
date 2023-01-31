<template>
  <div>
    <Header></Header>
    <div class="home_contain">
      <div class="left">
        <Slider></Slider>
        <Author></Author>
      </div>
      <div class="right">
        <div class="picture">
          <a href="/"><img src="@/assets/image/challenge.png" alt="" /></a>
          <a href="/"><img src="@/assets/image/member.png" alt="" /></a>
          <a href="/"><img src="@/assets/image/load.png" alt="" /></a>
          <a href="/"><img src="@/assets/image/copyright.png" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Author from "@/components/author.vue";
import Slider from "@/components/slider.vue";
export default {
  components: {
    Header,
    Author,
    Slider,
  },
};
</script>

<style lang="less" scoped>
.home_contain {
  width: 960px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-around;
  .left {
    width: 640px;
    box-sizing: border-box;
    padding-top: 30px;
    padding-left: 15px;
  }
  .right {
    width: 260px;
    // background-color: pink;
    margin-top: 30px;
    box-sizing: border-box;
    .picture {
      // width: 100%;
      img {
        width: 100%;
        border-radius: 6px;
      }
    }
  }
}
</style>