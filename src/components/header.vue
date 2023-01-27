<template>
  <!-- 头部组件 -->
  <div class="header">
    <!-- 左上方logo -->
    <div class="logo">
      <a href="/">
        <img src="@/assets/image/logo.png" alt="简书" />
      </a>
    </div>
    <!-- 中间部分的菜单 -->
    <div class="menu">
      <router-link
        v-for="(item, index) in menu"
        :key="index"
        :href="item.href"
        :class="[{ active: index === current }, item.class]"
        @click="changeCurrent(index)"
        :to="item.router"
      >
        <i :class="item.iconfont"></i>
        {{ item.content }}
      </router-link>

      <!-- 搜索栏 -->
      <div class="search">
        <div class="text_search">
          <input type="text" class="inp" placeholder="搜索" />
        </div>
        <div class="icon_search"><i class="iconfont">&#xe617;</i></div>
      </div>
    </div>
    <!-- 右侧的登入注册写文章区域 -->
    <div class="login">
      <a href="/"> Aa </a>
      <router-link to="/login"
        ><a href="javascript:void(0)"> 登录 </a></router-link
      >
      <router-link to="/login"
        ><a href="javascript:void(0)" class="register"> 注册 </a></router-link
      >
      <a href="/" class="writer">
        <i class="iconfont">&#xe600;</i>
        写文章
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      // 导航栏的菜单部分
      menu: [
        {
          href: "javascript:void(0)",
          class: "home",
          iconfont: "iconfont icon-zhinanzhen_o",
          content: "首页",
          router: "/home",
        },
        {
          href: "javascript:void(0)",
          class: "unload",
          iconfont: "iconfont icon-xiazai",
          content: "下载",
          router: "/unload",
        },
        {
          href: "javascript:void(0)",
          class: "member",
          iconfont: "iconfont icon-huangguan",
          content: "会员",
          router: "/member",
        },
        {
          href: "javascript:void(0)",
          class: "it",
          iconfont: "iconfont icon-jishufuwu",
          content: "IT技术",
          router: "/it",
        },
      ],
    };
  },
  methods: {
    changeCurrent(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  min-width: 1100px;
  max-width: 1440px;
  margin: 0 auto;
  // background-color: pink;
  display: flex;
  justify-content: space-between;
  line-height: 56px;
  height: 56px;
  .logo {
    display: block;
    width: 100px;
    min-width: 100px;
    // background-color: red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .menu {
    // display: flex;
    position: relative;
    min-width: 650px;
    width: 748px;
    // background-color: pink;
    // justify-content: center;
    a {
      position: absolute;
      color: black;
    }
    .active {
      color: #ea6f5a;
    }
    .unload {
      left: 100px;
    }
    .member {
      left: 220px;
    }
    .it {
      left: 320px;
    }
    .search {
      position: absolute;
      left: 430px;
      display: flex;
      .text_search {
        .inp {
          width: 240px;
          border-radius: 30px;
          outline: none;
          border: none;
          background-color: #efe8e8;
          height: 38px;
          box-sizing: border-box;
          padding-left: 20px;

          transition: 1s;
        }
        .inp:focus {
          width: 300px;
        }
      }
      .icon_search {
        position: absolute;
        right: 5px;
        height: 30px;
        width: 30px;
        line-height: 30px;
        margin-top: 14px;
        text-align: center;
        list-style: none;
        // background-color: pink;
        display: block;
        font-size: 20px;
        border-radius: 50%;
      }
    }
  }
  .login {
    width: 360px;
    display: flex;
    justify-content: space-around;
    a {
      color: #969696;
    }
    .register {
      display: block;
      border: 1px solid #ea6f5a;
      width: 80px;
      text-align: center;
      height: 38px;
      border-radius: 30px;
      color: #ea6f5a;
      box-sizing: border-box;
      margin-top: 10px;
      line-height: 38px;
    }
    .writer {
      width: 100px;
      height: 38px;
      line-height: 38px;
      border: 1px solid #ea6f5a;
      border-radius: 30px;
      background-color: #ea6f5a;
      margin-top: 10px;
      text-align: center;
      color: white;
    }
  }
}
</style>