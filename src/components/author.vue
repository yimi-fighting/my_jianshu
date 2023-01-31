<template>
  <div>
    <ul>
      <li class="contain" v-for="(item, index) in author" :key="index">
        <Paper :paper="item" :index="index" />
      </li>
    </ul>
    <div v-if="true">
      <AsyncScroll />
    </div>
  </div>
</template>

<script>
import p1 from "@/assets/image/author1.jpg";
import p2 from "@/assets/image/phone.png";
import p3 from "@/assets/image/jianshu.png";
import error from "./error.vue";
import loading from "./loading.vue";
const AsyncScroll = () => ({
  component: import("./scroll.vue"),
  loading: loading,
  error: error,
  delay: 200,
  timeout: 3000,
});
export default {
  components: {
    Paper: () => import("./paper.vue"),
    AsyncScroll,
  },
  data() {
    return {
      author: [
        {
          title: "父母的婚姻真的对孩子影响很大",
          content: `昨天跟朋友聊天，她说到她的姑娘，快三十岁了，依然选择我行我素，不考虑结婚。
            姑娘有一个好工作，人也高挑靓丽，就是不想结婚。
            被问的急了，就回一句...`,
          look: 7.7,
          name: "枫红云天",
          message: 23,
          like: 50,
          money: 20,
          img: p1,
        },
        {
          title: "父母的婚姻真的对孩子影响很大",
          content: `昨天跟朋友聊天，她说到她的姑娘，快三十岁了，依然选择我行我素，不考虑结婚。
            姑娘有一个好工作，人也高挑靓丽，就是不想结婚。
            被问的急了，就回一句...`,
          look: 7.7,
          name: "枫红云天",
          message: 23,
          like: 50,
          money: 20,
          img: p1,
        },
        {
          title: "父母的婚姻真的对孩子影响很大",
          content: `昨天跟朋友聊天，她说到她的姑娘，快三十岁了，依然选择我行我素，不考虑结婚。
            姑娘有一个好工作，人也高挑靓丽，就是不想结婚。
            被问的急了，就回一句...`,
          look: 7.7,
          name: "枫红云天",
          message: 23,
          like: 50,
          money: 20,
        },
        {
          title: "父母的婚姻真的对孩子影响很大",
          content: `昨天跟朋友聊天，她说到她的姑娘，快三十岁了，依然选择我行我素，不考虑结婚。
            姑娘有一个好工作，人也高挑靓丽，就是不想结婚。
            被问的急了，就回一句...`,
          look: 7.7,
          name: "枫红云天",
          message: 23,
          like: 50,
          money: 20,
          img: p1,
        },
        {
          title: "父母的婚姻真的对孩子影响很大",
          content: `昨天跟朋友聊天，她说到她的姑娘，快三十岁了，依然选择我行我素，不考虑结婚。
            姑娘有一个好工作，人也高挑靓丽，就是不想结婚。
            被问的急了，就回一句...`,
          look: 7.7,
          name: "枫红云天",
          message: 23,
          like: 50,
          money: 20,
          img: p2,
        },
        {
          title: "父母的婚姻真的对孩子影响很大",
          content: `昨天跟朋友聊天，她说到她的姑娘，快三十岁了，依然选择我行我素，不考虑结婚。
            姑娘有一个好工作，人也高挑靓丽，就是不想结婚。
            被问的急了，就回一句...`,
          look: 7.7,
          name: "枫红云天",
          message: 23,
          like: 50,
          money: 20,
          img: p2,
        },
        {
          title: "父母的婚姻真的对孩子影响很大",
          content: `昨天跟朋友聊天，她说到她的姑娘，快三十岁了，依然选择我行我素，不考虑结婚。
            姑娘有一个好工作，人也高挑靓丽，就是不想结婚。
            被问的急了，就回一句...`,
          look: 7.7,
          name: "枫红云天",
          message: 23,
          like: 50,
          money: 20,
          img: p3,
        },
        {
          title: "父母的婚姻真的对孩子影响很大",
          content: `昨天跟朋友聊天，她说到她的姑娘，快三十岁了，依然选择我行我素，不考虑结婚。
            姑娘有一个好工作，人也高挑靓丽，就是不想结婚。
            被问的急了，就回一句...`,
          look: 7.7,
          name: "枫红云天",
          message: 23,
          like: 50,
          money: 20,
          img: p3,
        },
        {
          title: "父母的婚姻真的对孩子影响很大",
          content: `昨天跟朋友聊天，她说到她的姑娘，快三十岁了，依然选择我行我素，不考虑结婚。
            姑娘有一个好工作，人也高挑靓丽，就是不想结婚。
            被问的急了，就回一句...`,
          look: 7.7,
          name: "枫红云天",
          message: 23,
          like: 50,
          money: 20,
          img: p3,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.contain {
  width: 625px;
  border-bottom: 1px solid #edecec;
}
</style>