<template>
  <div class="azure-container-ghost-bs">
    <div v-if="$slots.header" class="azure-container-ghost-bs__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="azure-container-ghost-bs__body" ref="wrapper">
      <slot/>
    </div>
    <div v-if="$slots.footer" class="azure-container-ghost-bs__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
import bs from './mixins/bs'
export default {
  name: 'azure-container-card-bs',
  mixins: [
    bs
  ]
}
</script>
