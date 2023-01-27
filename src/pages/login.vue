<template>
  <div class="login_wrapper">
    <div class="contain">
      <div class="left">
        <img class="phone" src="@/assets/image/phone.png" alt="手机图片" />
        <div class="bottom">
          <button class="unload">下载简书App</button>
          <div class="ewm_contain">
            <img src="@/assets/image/ewm.png" alt="下载二维码" />
          </div>
        </div>
      </div>
      <div class="right">
        <!-- 登入注册按钮 -->
        <div class="button_contain">
          <div :class="{ active: login }" @click="change('login')">登录</div>
          <div :class="{ active: !login }" @click="change('register')">
            注册
          </div>
        </div>
        <div class="login" v-if="login">
          <div class="account_paddword">
            <i class="iconfont icon-geren"></i>
            <input type="text" class="account" placeholder="手机号或邮箱" />
            <i class="iconfont icon-a-13Dsuotou"></i>
            <input type="password" class="password" placeholder="密码" />
          </div>
          <div class="remeber_question">
            <div class="remeber">
              <input type="checkbox" name="记住我" id="remeber" /> 记住我
            </div>
            <a href="/" class="question">登录遇到问题？</a>
          </div>
          <div class="submit">
            <button>登录</button>
          </div>
          <div class="social">
            <div class="text">
              <p>————</p>
              <p>社交账号登录</p>
              <p>————</p>
            </div>
            <div class="icon">
              <i class="iconfont icon-xinlangweibo"></i>
              <i class="iconfont icon-weixin"></i>
              <i class="iconfont icon-QQ"></i>
            </div>
          </div>
        </div>
        <div class="register" v-else>
          <div class="account_paddword">
            <i class="iconfont icon-geren"></i>
            <input type="text" class="name" placeholder="你的昵称" />
            <i class="iconfont icon-msg"></i>
            <input type="text" class="account" placeholder="手机号" />
            <i class="iconfont icon-a-13Dsuotou"></i>
            <input type="password" class="password" placeholder="设置密码" />
          </div>
          <div class="submit">
            <button>注册</button>
            <div class="text">
              点击“注册”即表示您同意并愿意遵守简书用户协议和隐私政策
            </div>
          </div>
          <div class="social">
            <div class="text">
              <p>————</p>
              <p>社交账号直接注册</p>
              <p>————</p>
            </div>
            <div class="icon">
              <i class="iconfont icon-weixin"></i>
              <i class="iconfont icon-QQ"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: false,
    };
  },
  methods: {
    change(text) {
      if (text === "login") {
        this.login = true;
      } else {
        this.login = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login_wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("@/assets/image/logo.png") rgb(241, 241, 241) no-repeat 10px
    10px;

  .contain {
    position: absolute;
    height: 600px;
    width: 820px;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    // background-color: pink;
    display: flex;
    justify-content: center;
    .left {
      .phone {
        width: 350px;
      }
      .bottom {
        width: 350px;
        height: 50px;
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
        .unload {
          background-color: #ea6f5a;
          border-radius: 30px;
          width: 250px;
          border: none;
          color: white;
          font-size: 17px;
          font-weight: 100;
        }
        .ewm_contain {
          width: 50px;
          height: 50px;
          background-color: white;
          position: relative;
          img {
            width: 90%;
            height: 90%;
            display: block;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
    .right {
      margin-left: 20px;
      width: 400px;
      height: 550px;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .button_contain {
        display: flex;
        width: 400px;
        height: 40px;
        // background-color: #c3958d;
        line-height: 40px;
        justify-content: space-evenly;
        .active {
          border-bottom: 2px solid #ea6f5a;
          color: #ea6f5a;
          width: 50px;
          text-align: center;
          font-weight: 600;
        }
      }
      .login {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 400px;
        height: 400px;
        // background-color: antiquewhite;
        .account_paddword {
          width: 300px;
          // background-color: greenyellow;
          margin: 0 auto;
          position: relative;
          .icon-geren {
            position: absolute;
            left: 10px;
            top: 15px;
            color: rgb(150, 150, 150);
            font-size: 20px;
          }
          .account {
            background-color: rgb(247, 247, 247);
            outline: none;
            border: none;
            border: 1px solid rgb(213, 213, 213);
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            padding-left: 40px;
          }
          .icon-a-13Dsuotou {
            position: absolute;
            left: 10px;
            top: 60px;
            color: rgb(150, 150, 150);
            font-size: 20px;
          }
          .password {
            background-color: rgb(247, 247, 247);
            outline: none;
            border: none;
            border: 1px solid rgb(213, 213, 213);
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            padding-left: 40px;
            border-top: none;
          }
        }
        .remeber_question {
          height: 30px;
          width: 300px;
          margin: 0 auto;
          // background-color: yellowgreen;
          .remeber {
            float: left;
          }
          .question {
            float: right;
            color: rgb(150, 150, 150);
          }
        }
        .submit {
          width: 300px;
          height: 80px;
          margin: 0 auto;
          // background-color: red;
          button {
            width: 100%;
            height: 50px;
            border-radius: 30px;
            border: none;
            background-color: rgb(49, 148, 208);
            font-size: 20px;
            color: white;
            font-weight: 100;
          }
        }
        .social {
          width: 300px;
          height: 150px;
          margin: 0 auto;
          // background-color: aquamarine;
          .text {
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: space-around;
          }
          .icon {
            width: 300px;
            height: 250px;
            margin: 0 auto;
            & > i:nth-child(1) {
              color: #ea6f5a;
            }
            & > i:nth-child(2) {
              color: rgb(0, 187, 41);
            }
            & > i:nth-child(3) {
              color: rgb(73, 138, 213);
            }
            i {
              font-size: 25px;
              margin-left: 50px;
            }
          }
        }
      }
      .register {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 400px;
        height: 400px;
        // background-color: antiquewhite;
        .account_paddword {
          width: 300px;
          // background-color: greenyellow;
          margin: 0 auto;
          position: relative;
          .name {
            background-color: rgb(247, 247, 247);
            outline: none;
            border: none;
            border: 1px solid rgb(213, 213, 213);
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            padding-left: 40px;
          }
          .icon-geren {
            position: absolute;
            left: 10px;
            top: 15px;
            color: rgb(150, 150, 150);
            font-size: 20px;
          }
          .icon-msg {
            position: absolute;
            left: 10px;
            top: 65px;
            color: rgb(150, 150, 150);
            font-size: 20px;
          }
          .account {
            background-color: rgb(247, 247, 247);
            outline: none;
            border: none;
            border: 1px solid rgb(213, 213, 213);
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            padding-left: 40px;
            border-top: none;
          }
          .icon-a-13Dsuotou {
            position: absolute;
            left: 10px;
            top: 115px;
            color: rgb(150, 150, 150);
            font-size: 20px;
          }
          .password {
            background-color: rgb(247, 247, 247);
            outline: none;
            border: none;
            border: 1px solid rgb(213, 213, 213);
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            padding-left: 40px;
            border-top: none;
          }
        }
        .remeber_question {
          height: 30px;
          width: 300px;
          margin: 0 auto;
          // background-color: yellowgreen;
          .remeber {
            float: left;
          }
          .question {
            float: right;
            color: rgb(150, 150, 150);
          }
        }
        .submit {
          width: 300px;
          height: 80px;
          margin: 0 auto;
          // background-color: red;
          button {
            width: 100%;
            height: 50px;
            border-radius: 30px;
            border: none;
            background-color: rgb(66, 192, 46);
            font-size: 20px;
            color: white;
            font-weight: 100;
          }
          .text {
            margin-top: 20px;
            font-size: 12px;
            color: rgb(150, 150, 150);
          }
        }
        .social {
          width: 300px;
          height: 150px;
          margin: 0 auto;
          // background-color: aquamarine;
          .text {
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: space-around;
          }
          .icon {
            width: 300px;
            height: 250px;
            margin: 0 auto;
            & > i:nth-child(1) {
              color: rgb(0, 187, 41);
            }
            & > i:nth-child(2) {
              color: rgb(73, 138, 213);
            }
            i {
              font-size: 25px;
              margin-left: 80px;
            }
          }
        }
      }
    }
  }
}
</style>>
</style>