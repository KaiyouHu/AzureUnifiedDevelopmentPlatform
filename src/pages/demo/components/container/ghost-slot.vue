<template>
  <azure-container type="ghost">
    <template slot="header">Header</template>
    <div class="azure-pt azure-pb">
      <el-card shadow="never" class="azure-card" style="width: 400px;">
        <azure-demo-article/>
      </el-card>
    </div>
    <template slot="footer">Footer</template>
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
