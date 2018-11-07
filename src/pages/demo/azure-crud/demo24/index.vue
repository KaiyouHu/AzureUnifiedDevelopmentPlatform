<template>
  <azure-container>
    <template slot="header">表格slot</template>
    <azure-crud
      ref="azureCrud"
      :columns="columns"
      :data="data">
      <el-button slot="headerButton">自定义按钮1</el-button>
      <el-button slot="headerButton" type="primary" round>自定义按钮2</el-button>
    </azure-crud>
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
          key: 'date',
          width: '180'
        },
        {
          title: '姓名',
          key: 'name',
          width: '180'
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
      ]
    }
  },
  mounted () {
    console.log(this.$refs.azureCrud.azureData)
  }
}
</script>
