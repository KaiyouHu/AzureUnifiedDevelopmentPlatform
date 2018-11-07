<template>
  <azure-container>
    <iframe
      class="azure-container-frame"
      :src="src"
      frameborder="0"/>
  </azure-container>
</template>

<script>
export default {
  name: 'azure-container-frame',
  props: {
    src: {
      type: String,
      required: false,
      default: 'https://doc.azureadmin.fairyever.com/zh/'
    }
  }
}
</script>

<style lang="scss" scoped>
.azure-container-frame {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}
</style>
