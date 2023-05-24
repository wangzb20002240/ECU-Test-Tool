<template>
  <div class="form">
    <h4>集成测试三</h4>
    <div class="img"></div>
    <div>输入视频序号（1-6）</div>
    <input type="text" v-model="data.index"/>
    <div>输入是否点赞（0-1）</div>
    <input type="text" v-model="data.like"/>
    <div>输入投币数量（0-2）</div>
    <input type="text" v-model="data.coins"/>
    <br>
    <button @click="submit(data)">提交</button>

    <p class="res" v-for="(item) in res.data">{{item}}</p>
  </div>
</template>

<script>
import {requestLikeAndCoins} from "@/api/testWeb";

export default {
  name: "TestLikeAndCoins",
  data() {
    return {
      data: {
        index: "",
        like: "",
        coins: "",
      },

      res: {}
    }
  },
  methods: {
    submit(data) {
      console.log(data)
      requestLikeAndCoins(data).then(resp => {
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
  background-image: url("../../../src/assets/route3.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
