<template>
  <azure-container type="ghost">
    <template slot="header">表格组件</template>
    <div class="azure-mt azure-mr">
      <el-card
        v-for="(table, index) in tableList"
        :key="index"
        shadow="never"
        class="azure-card azure-mb">
        <template slot="header">{{table.title}}</template>
        <component :is="table.component"/>
      </el-card>
    </div>
  </azure-container>
</template>

<script>
import { sortBy } from 'lodash'
const req = context => context.keys().map(context)
const tables = req(require.context('./components', true, /\.vue$/))
const components = {}
const tableList = []
sortBy(tables.map(e => ({
  component: e.default,
  index: e.default.index
})), ['index']).forEach((table, index) => {
  components[`azure-demo-el-table-${index + 1}`] = table.component
  tableList.push({
    title: table.component.title,
    component: `azure-demo-el-table-${index + 1}`
  })
})
export default {
  components,
  data () {
    return {
      tableList
    }
  }
}
</script>
