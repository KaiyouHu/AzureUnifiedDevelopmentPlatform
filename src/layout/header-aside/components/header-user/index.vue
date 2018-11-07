<template>
  <el-dropdown size="small" class="azure-mr">
    <span class="btn-text">你好 {{info.name}}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="logOff">
        <azure-icon name="power-off" class="azure-mr-5"/>
        注销
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('azureadmin/user', [
      'info'
    ])
  },
  methods: {
    ...mapActions('azureadmin/account', [
      'logout'
    ]),
    /**
     * @description 登出
     */
    logOff () {
      this.logout({
        vm: this,
        confirm: true
      })
    }
  }
}
</script>
