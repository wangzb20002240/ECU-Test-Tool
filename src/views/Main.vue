<template>
  <div class="page">
    <div class="header">
      <h1>{{ title }}</h1>
      <ul>
        <li>
          <router-link to='/module-testing-view/'>模块测试</router-link>
        </li>
        <li>
          <router-link to='/integration-testing-view'>集成测试</router-link>
        </li>
        <li>
          <router-link to="/data-testing-view">数据测试</router-link>
        </li>
      </ul>
    </div>
    <div id="routerViewMain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Main',
  components: {},
  data() {
    return {
      title: 'BiliBili网页测试系统',
    }
  },
})
</script>

<style>
#routerViewMain {
  margin: 40px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f2f2f2;
  border-bottom: 1px solid #ccc;
}

ul {
  display: flex;
  list-style: none;
  margin-right: 2rem;
  padding: 0;
}

li {
  margin-right: 2rem;
}
</style>
