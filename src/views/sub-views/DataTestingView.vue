<template>
  <div>
    <h3>数据测试</h3>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  name: "DataTestingView",
  mounted() {
    this.$router.push({name: 'test-keys'})
  }
}
</script>
