import Vue from 'vue'

import azureContainer from './azure-container'
import azureContainerFrame from './azure-container-frame'
import azureLinkBtn from './azure-link-btn'

// 注意 有些组件使用异步加载会有影响
Vue.component('azure-container', azureContainer)
Vue.component('azure-container-frame', azureContainerFrame)
Vue.component('azure-link-btn', azureLinkBtn)
Vue.component('azure-page-cover', () => import('./azure-page-cover'))
Vue.component('azure-count-up', () => import('./azure-count-up'))
Vue.component('azure-highlight', () => import('./azure-highlight'))
Vue.component('azure-icon', () => import('./azure-icon'))
Vue.component('azure-icon-select', () => import('./azure-icon-select/index.vue'))
Vue.component('azure-icon-svg', () => import('./azure-icon-svg/index.vue'))
Vue.component('azure-markdown', () => import('./azure-markdown'))
Vue.component('azure-mde', () => import('./azure-mde'))
Vue.component('azure-quill', () => import('./azure-quill'))
