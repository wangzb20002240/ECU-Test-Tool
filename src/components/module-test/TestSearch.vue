<template>
  <div class="form">
    <h4>搜索测试</h4>
    <div>输入搜索关键字</div>
    <input type="text" v-model="data.key"/>
    <button @click="submit(data)">提交</button>

    <p class="res" v-for="(item) in res.data">{{item}}</p>
  </div>
</template>

<script>
import {requestSearch} from "@/api/testWeb";

export default {
  name: "TestSearch",
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
      requestSearch(data).then(resp => {
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
