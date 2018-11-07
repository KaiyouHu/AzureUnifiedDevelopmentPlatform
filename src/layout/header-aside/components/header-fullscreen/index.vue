<template>
  <el-tooltip
    effect="dark"
    :content="active ? '退出全屏' : '全屏'"
    placement="bottom">
    <el-button class="azure-mr btn-text can-hover" type="text" @click="toggle">
      <azure-icon v-if="active" name="compress"/>
      <azure-icon v-else name="arrows-alt" style="font-size: 16px"/>
    </el-button>
  </el-tooltip>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('azureadmin/fullscreen', [
      'active'
    ])
  },
  methods: {
    ...mapActions('azureadmin/fullscreen', [
      'toggle'
    ])
  }
}
</script>
