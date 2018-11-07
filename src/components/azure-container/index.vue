<template>
  <div class="container-component" ref="container">
    <!-- [card] 卡片容器 -->
    <azure-container-card v-if="type === 'card' && !betterScroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </azure-container-card>
    <!-- [card] 卡片容器 滚动优化 -->
    <azure-container-card-bs v-bind="$attrs" v-if="type === 'card' && betterScroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </azure-container-card-bs>
    <!-- [ghost] 隐形容器 -->
    <azure-container-ghost v-if="type === 'ghost' && !betterScroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </azure-container-ghost>
    <!-- [ghost] 隐形容器 滚动优化 -->
    <azure-container-ghost-bs v-bind="$attrs" v-if="type === 'ghost' && betterScroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </azure-container-ghost-bs>
    <!-- [container-full] 填充 -->
    <azure-container-full v-if="type === 'full' && !betterScroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </azure-container-full>
    <!-- [container-full-bs] 填充 滚动优化 -->
    <azure-container-full-bs v-bind="$attrs" v-if="type === 'full' && betterScroll">
      <slot v-if="$slots.header" name="header" slot="header"/>
      <slot/>
      <slot v-if="$slots.footer" name="footer" slot="footer"/>
    </azure-container-full-bs>
  </div>
</template>

<script>
// 组件
import azureContainerFull from './components/azure-container-full.vue'
import azureContainerFullBs from './components/azure-container-full-bs.vue'
import azureContainerGhost from './components/azure-container-ghost.vue'
import azureContainerGhostBs from './components/azure-container-ghost-bs.vue'
import azureContainerCard from './components/azure-container-card.vue'
import azureContainerCardBs from './components/azure-container-card-bs.vue'
export default {
  name: 'azure-container',
  components: {
    'azure-container-full': azureContainerFull,
    'azure-container-full-bs': azureContainerFullBs,
    'azure-container-ghost': azureContainerGhost,
    'azure-container-ghost-bs': azureContainerGhostBs,
    'azure-container-card': azureContainerCard,
    'azure-container-card-bs': azureContainerCardBs
  },
  props: {
    // 容器样式
    type: {
      type: String,
      required: false,
      default: 'full'
    },
    // 滚动优化
    betterScroll: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
