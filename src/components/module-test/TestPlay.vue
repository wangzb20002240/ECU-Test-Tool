<template>
  <div class="form">
    <h4>播放测试</h4>
    <div>输入播放视频序号（1-6）</div>
    <input type="text" v-model="data.index"/>
    <button @click="submit(data)">提交</button>

    <p class="res" v-for="(item) in res.data">{{item}}</p>
  </div>
</template>

<script>
import {requestPlay} from "@/api/testWeb";

export default {
  name: "TestPlay",
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
      requestPlay(data).then(resp => {
        this.res = resp.data
      }).catch(e => {
        console.log("error", e)
      })
    }
  }
}
</script>

<style scoped>

</style>
