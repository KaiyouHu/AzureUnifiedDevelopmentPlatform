<template>
  <div class="azure-page-cover">
    <div class="azure-page-cover__logo">
      <slot/>
    </div>
    <p class="azure-page-cover__title">{{title}}</p>
    <p class="azure-page-cover__sub-title azure-mt-0">{{subTitle}}</p>
    <slot name="footer"/>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Title'
    },
    subTitle: {
      type: String,
      required: false,
      default: 'subTitle'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.azure-page-cover {
  @extend %full;
  @extend %unable-select;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .azure-page-cover__logo {
    img {
      width: 200px;
    }
  }
  .azure-page-cover__title {
    color: $color-text-main;
  }
  .azure-page-cover__sub-title {
    color: $color-text-sub;
  }
}
</style>
