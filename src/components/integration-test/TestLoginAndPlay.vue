<template>
  <div class="form">
    <h4>集成测试一</h4>
    <div class="img"></div>
    <div>输入查找关键字</div>
    <input type="text" v-model="data.key"/>
    <button @click="submit(data)">提交</button>

    <p class="res" v-for="(item) in res.data">{{item}}</p>
  </div>
</template>

<script>
import {requestLoginAndPlay} from "@/api/testWeb";

export default {
  name: "TestLoginAndPlay",
  data() {
    return {
      data: {
        key: ""
      },

      res: {}
    }
  },
  methods: {
    submit(data) {
      console.log(data)
      requestLoginAndPlay(data).then(resp => {
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
  background-image: url("../../../src/assets/route1.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
