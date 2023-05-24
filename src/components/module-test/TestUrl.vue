<template>
  <div class="form">
    <h4>url测试</h4>
    <div>输入url地址</div>
    <input type="text" v-model="data.url"/>
    <button @click="submit(data)">提交</button>

    <p class="res" v-for="(item) in res.data">{{item}}</p>
  </div>
</template>

<script>
import {requestUrl} from "@/api/testWeb";

export default {
  name: "TestUrl",
  data() {
    return {
      data: {
        url: ""
      },

      res: {}
    }
  },
  methods: {
    submit(data) {
      console.log(data)
      requestUrl(data).then(resp => {
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
