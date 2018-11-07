<template>
  <el-submenu :index="menu.path || uniqueId">
    <template slot="title">
      <i v-if="menu.icon" :class="`fa fa-${menu.icon}`"></i>
      <azure-icon-svg v-else-if="menu.iconSvg" :name="menu.iconSvg"/>
      <i v-else class="fa fa-folder-o"></i>
      <span slot="title">{{menu.title}}</span>
    </template>
    <template v-for="(child, childIndex) in menu.children">
      <azure-layout-header-aside-menu-item v-if="child.children === undefined" :menu="child" :key="childIndex"/>
      <azure-layout-header-aside-menu-sub v-else :menu="child" :key="childIndex"/>
    </template>
  </el-submenu>
</template>

<script>
import { uniqueId } from 'lodash'
// 组件
import azureLayoutMainMenuItem from '../menu-item'

export default {
  name: 'azure-layout-header-aside-menu-sub',
  components: {
    'azure-layout-header-aside-menu-item': azureLayoutMainMenuItem
  },
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data () {
    return {
      uniqueId: uniqueId('azure-menu-empty-')
    }
  }
}
</script>
