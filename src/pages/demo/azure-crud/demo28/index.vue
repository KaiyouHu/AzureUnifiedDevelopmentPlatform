<template>
  <azure-container>
    <template slot="header">自定义加载状态</template>
    <el-button @click="handleLoading">点我切换加载状态</el-button>
    <azure-crud
      style="margin-top: 10px"
      :columns="columns"
      :data="data"
      :loading="loading"
      :loading-options="loadingOptions"/>
    <el-card shadow="never" class="azure-mb">
      <azure-markdown :source="doc"/>
    </el-card>
    <el-card shadow="never" class="azure-mb">
      <azure-highlight :code="code"/>
    </el-card>
    <template slot="footer">
      <azure-link-btn title="文档" link="https://doc.azureadmin.fairyever.com/zh/ecosystem-azure-crud/"/>
    </template>
  </azure-container>
</template>

<script>
import doc from './doc.md'
import code from './code.js'

export default {
  data () {
    return {
      doc,
      code,
      columns: [
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      loading: true,
      loadingOptions: {
        text: '拼命加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.8)'
      }
    }
  },
  methods: {
    handleLoading () {
      this.loading = !this.loading
    }
  }
}
</script>
