<template>
  <azure-container>
    <template slot="header">指定资源</template>
    <azure-markdown :source="doc"/>
  </azure-container>
</template>

<script>
import doc from './md/doc.md'
export default {
  data () {
    return {
      doc
    }
  }
}
</script>
