<template>
  <h4>关键字测试</h4>
  <div>输入关键字</div>
  <input type="text" v-model="key" ref="be"/>
  <button @click="add(key)">添加</button>
  <ul>
    <li>
      <div v-for="(item, index) in data.keys">{{ index + 1 }} -- {{ item }}</div>
    </li>
  </ul>
  <button @click="submit(data)">提交</button>
  <p class="res" v-for="(item) in res.data">{{item}}</p>
</template>

<script>
import {requestKeys} from "@/api/testWeb";

export default {
  name: "TestKeys",
  data() {
    return {
      key: "",
      data: {
        keys: []
      },
      res: {}
    }
  },
  methods: {
    submit(data) {
      console.log(data)
      if (data.keys.length === 0) {
        alert("请至少输入一个关键字")
      } else {
        requestKeys(data).then(resp => {
          this.res = resp.data
        }).catch(e => {
          console.log("error", e)
        })
      }
    },
    add(key) {
      this.data.keys.push(key)
      this.key = ""
      this.$refs.be.focus()
    }
  }
}
</script>

<style scoped>
</style>
