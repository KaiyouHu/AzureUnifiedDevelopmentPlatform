<template>
  <azure-container better-scroll>
    <template slot="header">Header</template>
    <azure-demo-article/>
    <template slot="footer">Header</template>
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
