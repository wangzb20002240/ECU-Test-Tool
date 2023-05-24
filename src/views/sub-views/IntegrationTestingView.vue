<template>
  <div>
    <h3>集成测试</h3>
    <div>
      <ul>
        <li>
          <router-link to='/module-testing-view/test-login-and-play'>集成测试一</router-link>
        </li>
        <li>
          <router-link to='/module-testing-view/test-history'>集成测试二</router-link>
        </li>
        <li>
          <router-link to='/module-testing-view/test-like-and-coins'>集成测试三</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  name: "IntegrationTestingView",
  mounted() {
    this.$router.push({name: 'test-login-and-play'})
  }
}
</script>
