<template>
  <azure-container>
    <template slot="header">固定列</template>
    <azure-crud
      :columns="columns"
      :data="data"/>
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
          width: '180',
          fixed: true
        },
        {
          title: '姓名',
          key: 'name',
          width: '180'
        },
        {
          title: '省份',
          key: 'province',
          width: '300'
        },
        {
          title: '市区',
          key: 'city',
          width: '300'
        },
        {
          title: '地址',
          key: 'address',
          width: '300'
        },
        {
          title: '邮编',
          key: 'zip',
          fixed: 'right'
        }
      ],
      data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  }
}
</script>
