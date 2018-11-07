<template>
  <azure-container>
    <p class="azure-mt-0">useragent</p>
    <el-input :value="uaData.ua"></el-input>
    <p>格式化数据 in vuex: state.azureadmin.ua.data</p>
    <azure-highlight :code="uaStr"/>
  </azure-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('azureadmin/ua', {
      uaData: 'data'
    }),
    uaStr () {
      const { browser, engine, os, device, cpu } = this.uaData
      return JSON.stringify({ browser, engine, os, device, cpu }, null, 2)
    }
  }
}
</script>
