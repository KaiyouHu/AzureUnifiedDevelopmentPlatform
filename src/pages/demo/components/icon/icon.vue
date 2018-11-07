<template>
  <azure-container>
    <template slot="header">图标组件</template>
    <azure-icon class="azure-mr-10"/>
    <azure-icon name="github" class="azure-mr-10"/>
    <azure-icon name="github" style="font-size: 100px;" class="azure-mr-10"/>
    <azure-icon name="github" class="icon-demo"/>
  </azure-container>
</template>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.icon-demo {
  transition: all .3s;
  font-size: 100px;
  color: #409EFF;
  @extend %unable-select;
  &:hover{
    color: #F56C6C;
    transform: scale(1.2) rotate(30deg);
  }
}
</style>
