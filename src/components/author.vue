<template>
  <div>
    <ul>
      <li class="contain" v-for="(item, index) in author" :key="index">
        <Paper :paper="item" :index="index" />
      </li>
    </ul>
    <div v-if="false">
      <AsyncScroll @scroll-state="scroll" />
    </div>
    
  </div>
</template>

<script>
import error from "./error.vue";
import loading from "./loading.vue";
import { mapState } from "vuex";
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
  computed: {
    ...mapState(["author"]),
  },
  methods: {
    scroll(a) {
      console.log("触发了", a, "1");
    },
  },
};
</script>

<style lang="less" scoped>
.contain {
  width: 625px;
  border-bottom: 1px solid #edecec;
}
</style>