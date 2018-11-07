<template>
  <azure-container class="page">
    <azure-page-cover
      title="I AM azureADMIN"
      sub-title="追求简约美感的后台管理系统集成方案">
      <azure-icon-svg style="width: 120px;" name="azure-admin"/>
      <template slot="footer">
        <div class="page__btn-group">
          <span @click="$open('https://github.com/d2-projects')">开源组织</span> |
          <span @click="$open('https://doc.azureadmin.fairyever.com/zh/')">文档</span> |
          <span @click="$open('https://github.com/d2-projects/azure-admin-start-kit')">简化版</span> |
          <span @click="$open('https://alibaba.github.io/ice/scaffold?type=vue')">飞冰</span> |
          <span @click="$open('https://juejin.im/user/57a48b632e958a006691b946/posts')">掘金</span> |
          <span @click="$open('https://awesome.fairyever.com/daily/')">程序员日报</span> |
          <el-popover
            :width="172"
            trigger="hover">
            <p class="azure-mt-0 azure-mb-10">azureProjects</p>
            <img src="./image/qr@2x.png" style="width: 172px;">
            <span slot="reference">微信公众号</span>
            <p
              style="
                font-size: 12px;
                margin-top: 0px;
                margin-bottom: 0px;
              ">
              官方公众号，主要推送前端技术类文章、框架资源、学习教程，以及 azure 系列项目更新信息
            </p>
          </el-popover>
        </div>
        <azure-badge/>
        <azure-help-btn/>
      </template>
    </azure-page-cover>
  </azure-container>
</template>

<script>
import azureHelpBtn from './components/azure-help-btn'
import azureBadge from './components/azure-badge'
export default {
  components: {
    azureHelpBtn,
    azureBadge
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.page {
  .page__btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 20px;
    span {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
    }
  }
}
</style>
