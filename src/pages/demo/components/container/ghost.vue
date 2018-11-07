<template>
  <azure-container type="ghost">
    <div class="azure-pt azure-pb">
      <el-card shadow="never" class="azure-card" style="width: 400px;">
        <azure-demo-article/>
      </el-card>
    </div>
  </azure-container>
</template>

<script>
import azureDemoArticle from './components/azure-demo-article'
export default {
  components: {
    'azure-demo-article': azureDemoArticle
  }
}
</script>
