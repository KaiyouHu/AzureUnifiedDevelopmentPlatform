<template>
  <azure-container type="card">
    <h1 class="azure-mt-0">$route.params.username: {{$route.params.username}}</h1>
    <h1>$route.query.userid: {{$route.query.userid}}</h1>
    <p>你可以尝试返回发送数据页面修改数据重新发送，或者切换到其它页面后刷新浏览器再返回本业观察参数保留</p>
    <el-button type="primary" @click="$router.push({ name: 'demo-playground-page-argu-send' })">返回发送数据的页面</el-button>
  </azure-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
