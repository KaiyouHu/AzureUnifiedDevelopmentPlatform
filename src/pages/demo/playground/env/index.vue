<template>
  <azure-container type="card">
    <template slot="header">process.env</template>
    <p class="azure-mt-0">NODE_ENV = {{env}}</p>
    <p>BASE_URL = {{baseUrl}}</p>
    <p class="azure-mb-0">VUE_APP_TITLE = {{title}}</p>
  </azure-container>
</template>

<script>
export default {
  data () {
    return {
      env: process.env.NODE_ENV,
      baseUrl: process.env.BASE_URL,
      title: process.env.VUE_APP_TITLE
    }
  }
}
</script>
