<template>
  <div class="azure-container-ghost">
    <div v-if="$slots.header" class="azure-container-ghost__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="azure-container-ghost__body">
      <slot/>
    </div>
    <div v-if="$slots.footer" class="azure-container-ghost__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>
