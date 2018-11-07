<template>
  <azure-container type="card">
    <template slot="header">Header</template>
    <azure-demo-article/>
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
