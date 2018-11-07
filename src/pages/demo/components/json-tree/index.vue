<template>
  <azure-container>
    <tree-view :data="packJson" :options="options"/>
  </azure-container>
</template>

<script>
import packJson from '../../../../../package.json'
export default {
  data () {
    return {
      options: {
        maxDepth: 10,
        rootObjectKey: 'package.json',
        modifiable: false
      },
      packJson
    }
  }
}
</script>
