<template>
  <div class="azure-container-full">
    <div v-if="$slots.header" class="azure-container-full__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="azure-container-full__body">
      <slot/>
    </div>
    <div v-if="$slots.footer" class="azure-container-full__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'azure-container-full'
}
</script>
