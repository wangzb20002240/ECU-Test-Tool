<template>
  <div>
    <h3>模块测试</h3>
    <div>
      <ul>
        <li>
          <router-link to='/module-testing-view/test-url'>url测试</router-link>
        </li>
        <li>
          <router-link to='/module-testing-view/test-search'>搜索测试</router-link>
        </li>
        <li>
          <router-link to="/module-testing-view/test-play">播放测试</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModuleTestingView",
  mounted() {
    this.$router.push({name: 'test-url'})
  }
}
</script>
