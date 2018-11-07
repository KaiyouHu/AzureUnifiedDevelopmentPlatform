<template>
  <div class="azure-container-full-bs">
    <div v-if="$slots.header" class="azure-container-full-bs__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="azure-container-full-bs__body" ref="wrapper">
      <div class="azure-container-full-bs__body-wrapper-inner">
        <slot/>
      </div>
    </div>
    <div v-if="$slots.footer" class="azure-container-full-bs__footer" ref="footer">
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
