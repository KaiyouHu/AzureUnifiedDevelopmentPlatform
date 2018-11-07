<template>
  <azure-container>

    <h1 class="azure-mt-0">主色</h1>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="color color-primary">
          <azure-element-basic-color-info name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
    </el-row>

    <h1>辅助色</h1>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="color color-info">
          <azure-element-basic-color-info name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="color color-success">
          <azure-element-basic-color-info name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="color color-warning">
          <azure-element-basic-color-info name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="color color-danger">
          <azure-element-basic-color-info name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
    </el-row>

    <h1>中性色</h1>
    <el-row :gutter="20" class="azure-mb">
      <el-col :span="6">
        <div class="color color-text-main">
          <azure-element-basic-color-info name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="color color-text-normal">
          <azure-element-basic-color-info name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="color color-text-sub">
          <azure-element-basic-color-info name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="color color-text-placehoder">
          <azure-element-basic-color-info name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="color color-border-1">
          <azure-element-basic-color-info theme="dark" name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="color color-border-2">
          <azure-element-basic-color-info theme="dark" name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="color color-border-3">
          <azure-element-basic-color-info theme="dark" name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="color color-border-4">
          <azure-element-basic-color-info theme="dark" name="Blue" sass="$color-primary" color="#409EFF"/>
        </div>
      </el-col>
    </el-row>

  </azure-container>
</template>

<script>
export default {
  components: {
    'azure-element-basic-color-info': () => import('./components/info.vue')
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/unit/color.scss';
.color {
  border-radius: 4px;
  height: 90px;
}

.color-primary {
  background-color: $color-primary;
}

.color-info {
  background-color: $color-info;
}
.color-success {
  background-color: $color-success;
}
.color-warning {
  background-color: $color-warning;
}
.color-danger {
  background-color: $color-danger;
}

.color-text-main {
  background-color: $color-text-main;
}
.color-text-normal {
  background-color: $color-text-normal;
}
.color-text-sub {
  background-color: $color-text-sub;
}
.color-text-placehoder {
  background-color: $color-text-placehoder;
}

.color-border-1 {
  background-color: $color-border-1;
}
.color-border-2 {
  background-color: $color-border-2;
}
.color-border-3 {
  background-color: $color-border-3;
}
.color-border-4 {
  background-color: $color-border-4;
}
</style>
