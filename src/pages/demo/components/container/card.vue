<template>
  <azure-container type="card">
    <azure-demo-article/>
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
