<template>
  <div>
    <el-tooltip
      effect="dark"
      :content="tooltipContent"
      placement="bottom">
      <el-button
        class="azure-ml-0 azure-mr btn-text can-hover"
        type="text"
        @click="handleClick">
        <el-badge
          v-if="logLength > 0"
          :max="99"
          :value="logLengthError"
          :is-dot="logLengthError === 0">
          <azure-icon
            :name="logLengthError === 0 ? 'dot-circle-o' : 'bug'"
            style="font-size: 20px"/>
        </el-badge>
        <azure-icon
          v-else
          name="dot-circle-o"
          style="font-size: 20px"/>
      </el-button>
    </el-tooltip>
    <el-dialog
      :title="tooltipContent"
      :fullscreen="true"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <div class="azure-mb-10">
        <el-button type="danger" size="mini" @click="handleLogClean">
          <azure-icon name="trash-o"/>
          清空
        </el-button>
      </div>
      <azure-error-log-list/>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import azureErrorLogList from './components/list'
export default {
  components: {
    azureErrorLogList
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters('azureadmin', {
      logLength: 'log/length',
      logLengthError: 'log/lengthError'
    }),
    tooltipContent () {
      return this.logLength === 0
        ? '没有日志或异常'
        : `${this.logLength} 条日志${this.logLengthError > 0
          ? ` | 包含 ${this.logLengthError} 个异常`
          : ''}`
    }
  },
  methods: {
    ...mapMutations('azureadmin/log', [
      'clean'
    ]),
    handleClick () {
      if (this.logLength > 0) {
        this.dialogVisible = true
      }
    },
    handleLogClean () {
      this.dialogVisible = false
      this.clean()
    }
  }
}
</script>
