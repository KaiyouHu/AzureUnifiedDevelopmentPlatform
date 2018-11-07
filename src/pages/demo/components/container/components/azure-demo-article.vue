<template>
  <div>
    <div class="azure-demo-article-control">
      <el-switch
        v-model="isLong"
        active-text="长内容"
        inactive-text="短内容">
      </el-switch>
    </div>
    <azure-markdown v-show="isLong" :source="long"/>
    <azure-markdown v-show="!isLong" :source="short"/>
  </div>
</template>

<script>
import long from '../md/long.md'
import short from '../md/short.md'
export default {
  data () {
    return {
      long,
      short,
      isLong: false
    }
  }
}
</script>

<style lang="scss" scoped>
.azure-demo-article-control {
  padding: 8px 16px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #f4f4f5;
}
</style>
