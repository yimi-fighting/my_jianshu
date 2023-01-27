<template>
  <div>
    <Header></Header>
    <div class="home_contain">
      <div class="left">
        <div class="slider" @mouseover="showArrows" @mouseout="hiddenArrows">
          <ul>
            <li
              v-for="(item, index) in slider"
              :key="index"
              :class="{ show: item.show }"
            >
              <img :src="item.src" alt="图片" />
            </li>
          </ul>
          <div
            :class="[{ mouseover: arrows }, 'slider_previous']"
            @click="previous"
          ></div>
          <div
            :class="[{ mouseover: arrows }, 'slider_next']"
            @click="next"
          ></div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import p1 from "@/assets/image/轮播图1.jpg";
import p2 from "@/assets/image/轮播图2.jpg";
export default {
  components: {
    Header,
  },
  data() {
    return {
      show: 0,
      arrows: false,
      slider: [
        {
          src: p1,
          show: true,
        },
        {
          src: p2,
          show: false,
        },
      ],
    };
  },
  methods: {
    sliderBegin(index) {
      clearInterval(this.timer);
      this.slider[this.show].show = false;
      this.show = index;
      this.slider[this.show].show = true;
      // 开启定时器
      this.timer = setInterval(() => {
        this.slider[this.show].show = false;
        this.show = (this.show + 1) % this.slider.length;
        this.slider[this.show].show = true;
      }, 3000);
    },
    // 轮播图后退按钮
    previous() {
      let show = (this.show - 1 + this.slider.length) % this.slider.length;
      this.sliderBegin(show);
    },
    // 轮播图前进按钮
    next() {
      let show = (this.show + 1) % this.slider.length;
      this.sliderBegin(show);
    },
    // 显示轮播图箭头
    showArrows() {
      this.arrows = true;
    },
    // 隐藏轮播图箭头
    hiddenArrows() {
      this.arrows = false;
    },
  },
  mounted() {
    // 开启定时器
    this.timer = setInterval(() => {
      this.slider[this.show].show = false;
      this.show = (this.show + 1) % this.slider.length;
      this.slider[this.show].show = true;
    }, 3000);
  },
  // 组件销毁
  destroyed() {
    // 删除定时器
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="less" scoped>
.home_contain {
  width: 960px;
  margin: auto;
  height: 100%;
  background-color: pink;
  .left {
    width: 500px;
    box-sizing: border-box;
    padding-top: 30px;
    padding-left: 15px;
    .slider {
      width: 625px;
      height: 270px;
      position: relative;
      ul {
        li {
          position: absolute;
          opacity: 0;
          transition: opacity 1s;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
        .show {
          opacity: 1;
          transition: opacity 1s;
        }
      }
      .slider_previous {
        width: 30px;
        height: 50px;
        background-color: black;
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        transition: opacity 1s;
      }
      .slider_next {
        width: 30px;
        height: 50px;
        background-color: black;
        opacity: 0;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
      }
      .slider_previous::after {
        content: "<";
        color: white;
        line-height: 50px;
        font-size: 30px;
        margin-left: 7px;
      }
      .slider_next::after {
        content: ">";
        color: white;
        line-height: 50px;
        font-size: 30px;
        margin-left: 7px;
      }
      .mouseover {
        opacity: 0.5;
        transition: opacity 1s;
      }
    }
  }
  .right {
    width: 260px;
  }
}
</style>