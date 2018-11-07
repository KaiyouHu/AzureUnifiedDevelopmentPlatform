<template>
  <div
    class="azure-layout-header-aside-group"
    :style="styleLayoutMainGroup"
    :class="{grayMode: grayActive}">
    <!-- 半透明遮罩 -->
    <div class="azure-layout-header-aside-mask"></div>
    <!-- 主体内容 -->
    <div class="azure-layout-header-aside-content" flex="dir:top">
      <!-- 顶栏 -->
      <div
        class="azure-theme-header"
        :style="{
          opacity: this.searchActive ? 0.5 : 1
        }"
        flex-box="0"
        flex>
        <div class="logo-group" :style="{width: asideCollapse ? asideWidthCollapse : asideWidth}" flex-box="0">
          <img v-if="asideCollapse" :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/icon-only.png`">
          <img v-else :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/all.png`">
        </div>
        <div class="toggle-aside-btn" @click="handleToggleAside" flex-box="0">
          <azure-icon name="bars"/>
        </div>
        <azure-menu-header flex-box="1"/>
        <!-- 顶栏右侧 -->
        <div class="azure-header-right" flex-box="0">
          <!-- 如果你只想在开发环境显示这个按钮请添加 v-if="$env === 'development'" -->
          <azure-header-search @click="handleSearchClick"/>
          <azure-header-error-log/>
          <azure-header-fullscreen/>
          <azure-header-theme/>
          <azure-header-size/>
          <azure-header-user/>
        </div>
      </div>
      <!-- 下面 主体 -->
      <div class="azure-theme-container" flex-box="1" flex>
        <!-- 主体 侧边栏 -->
        <div
          flex-box="0"
          ref="aside"
          class="azure-theme-container-aside"
          :style="{
            width: asideCollapse ? asideWidthCollapse : asideWidth,
            opacity: this.searchActive ? 0.5 : 1
          }">
          <azure-menu-side/>
        </div>
        <!-- 主体 -->
        <div class="azure-theme-container-main" flex-box="1" flex>
          <!-- 搜索 -->
          <transition name="fade-scale">
            <div v-show="searchActive" class="azure-theme-container-main-layer" flex="dir:top">
              <azure-panel-search
                ref="panelSearch"
                @close="searchPanelClose"/>
            </div>
          </transition>
          <!-- 内容 -->
          <transition name="fade-scale">
            <div v-show="!searchActive" class="azure-theme-container-main-layer" flex="dir:top">
              <!-- tab -->
              <div class="azure-theme-container-main-header" flex-box="0">
                <azure-tabs/>
              </div>
              <!-- 页面 -->
              <div class="azure-theme-container-main-body" flex-box="1">
                <transition :name="transitionActive ? 'fade-transverse' : ''">
                  <keep-alive :include="keepAlive">
                    <router-view/>
                  </keep-alive>
                </transition>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import mixinSearch from './mixins/search'
export default {
  name: 'azure-layout-header-aside',
  mixins: [
    mixinSearch
  ],
  components: {
    'azure-menu-side': () => import('./components/menu-side'),
    'azure-menu-header': () => import('./components/menu-header'),
    'azure-tabs': () => import('./components/tabs'),
    'azure-header-fullscreen': () => import('./components/header-fullscreen'),
    'azure-header-search': () => import('./components/header-search'),
    'azure-header-size': () => import('./components/header-size'),
    'azure-header-theme': () => import('./components/header-theme'),
    'azure-header-user': () => import('./components/header-user'),
    'azure-header-error-log': () => import('./components/header-error-log')
  },
  data () {
    return {
      // [侧边栏宽度] 正常状态
      asideWidth: '200px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px'
    }
  },
  computed: {
    ...mapState('azureadmin', {
      keepAlive: state => state.page.keepAlive,
      grayActive: state => state.gray.active,
      transitionActive: state => state.transition.active,
      asideCollapse: state => state.menu.asideCollapse
    }),
    ...mapGetters('azureadmin', {
      themeActiveSetting: 'theme/activeSetting'
    }),
    /**
     * @description 最外层容器的背景图片样式
     */
    styleLayoutMainGroup () {
      return {
        ...this.themeActiveSetting.backgroundImage ? {
          backgroundImage: `url('${this.$baseUrl}${this.themeActiveSetting.backgroundImage}')`
        } : {}
      }
    }
  },
  methods: {
    ...mapActions('azureadmin/menu', [
      'asideCollapseToggle'
    ]),
    /**
     * 接收点击切换侧边栏的按钮
     */
    handleToggleAside () {
      this.asideCollapseToggle()
    }
  }
}
</script>

<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
</style>
