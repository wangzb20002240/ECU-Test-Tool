<template>
  <div class="form">
    <h4>集成测试二</h4>
    <div class="img"></div>
    <div>输入要删除的历史记录序号</div>
    <input type="text" v-model="data.index"/>
    <button @click="submit(data)">提交</button>

    <p class="res" v-for="(item) in res.data">{{item}}</p>
  </div>
</template>

<script>
import {requestHistory} from "@/api/testWeb";

export default {
  name: "TestHistory",
  data() {
    return {
      data: {
        index: ""
      },

      res: {}
    }
  },
  methods: {
    submit(data) {
      console.log(data)
      requestHistory(data).then(resp => {
        this.res = resp.data
      }).catch(e => {
        console.log("error", e)
      })
    }
  }
}
</script>

<style scoped>
.img {
  width: 1200px;
  height: 300px;
  background-image: url("../../../src/assets/route2.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
