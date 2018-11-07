<template>
  <azure-container>
    <template slot="header">基本示例</template>
    <azure-mde
      v-model="text"
      class="mde"/>
    <el-card shadow="never" class="azure-card">
      <pre>{{text}}</pre>
    </el-card>
  </azure-container>
</template>

<script>
import text from './text'
export default {
  data () {
    return {
      text
    }
  }
}
</script>

<style lang="scss" scoped>
.mde {
  margin-bottom: -16px;
}
</style>
