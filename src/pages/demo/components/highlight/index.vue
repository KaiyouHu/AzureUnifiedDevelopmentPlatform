<template>
  <azure-container>
    <template slot="header">代码高亮组件</template>
    <el-card shadow="never" class="azure-mb">
      <p slot="title">javascript</p>
      <azure-highlight :code="codeJavascript"/>
    </el-card>
    <el-card shadow="never" class="azure-mb">
      <p slot="title">css</p>
      <azure-highlight :code="codeCSS"/>
    </el-card>
    <el-card shadow="never" class="azure-mb">
      <p slot="title">scss</p>
      <azure-highlight :code="codeSCSS"/>
    </el-card>
    <el-card shadow="never">
      <p slot="title">html</p>
      <azure-highlight :code="codeHTML"/>
    </el-card>
  </azure-container>
</template>

<script>
import codeJavascript from './code/javascript'
import codeCSS from './code/css'
import codeSCSS from './code/scss'
import codeHTML from './code/html'
export default {
  data () {
    return {
      codeJavascript,
      codeCSS,
      codeSCSS,
      codeHTML
    }
  }
}
</script>
