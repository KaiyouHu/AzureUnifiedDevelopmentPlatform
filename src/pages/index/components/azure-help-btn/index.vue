<template>
  <div>
    <img
      src="./image/azure-help-button@2x.png"
      style="width: 138px;"
      @click="dialogVisible = true">
    <el-dialog
      title="帮助"
      width="600px"
      :visible.sync="dialogVisible"
      :append-to-body="true">
      <div style="margin-top: -25px; margin-bottom: -25px;">
        <el-button-group class="azure-mb">
          <el-button @click="$open('https://github.com/d2-projects/azure-admin')">
            <azure-icon name="github" class="azure-mr-5"/>
            主页
          </el-button>
          <el-button @click="$open('https://doc.azureadmin.fairyever.com/zh/')">
            <azure-icon name="book" class="azure-mr-5"/>
            中文文档
          </el-button>
          <el-button @click="$open('https://github.com/d2-projects/azure-admin/issues')">
            <azure-icon name="question" class="azure-mr-5"/>
            issues
          </el-button>
          <el-button @click="$open('https://github.com/d2-projects/azure-admin/issues/new/choose')">
            <azure-icon name="plus" class="azure-mr-5"/>
            New issue
          </el-button>
        </el-button-group>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-alert :closable="false" type="info" title="扫码进 QQ 群 [ 推荐 ]" class="azure-mb"/>
            <img src="./image/qq.jpg" style="width: 100%;">
          </el-col>
          <el-col :span="12">
            <el-alert :closable="false" type="info" title="作者微信 加好友后邀请进微信群" class="azure-mb"/>
            <img src="./image/we.jpg" style="width: 100%;">
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'azure-page-cover',
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>
