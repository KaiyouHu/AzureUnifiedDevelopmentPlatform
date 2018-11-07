<template>
  <div class="azure-container-card">
    <div v-if="$slots.header" class="azure-container-card__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="azure-container-card__body">
      <div class="azure-container-card__body-card">
        <slot/>
      </div>
    </div>
    <div v-if="$slots.footer" class="azure-container-card__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'azure-container-card'
}
</script>
