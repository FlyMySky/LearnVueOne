<template>
  <div>
    <el-row justify="center" align="middle" type="flex" gutter="10">
      <el-col :span="24">
        <svg width="63" height="59" viewBox="0 0 63 59" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Canvas" fill="none">
            <g id="duotai-icon">
              <g id="Rectangle">
                <rect width="41.1402" height="42.1429" transform="translate(21.5987 16.8571)" fill="#FF7262"/>
              </g>
              <g id="Vector 2">
                <path d="M 0 25.2857L 21.5986 0L 43.1972 25.2857L 0 25.2857Z" transform="translate(0 33.7142)" fill="#0ACF83"/>
              </g>
              <g id="Ellipse">
                <ellipse cx="16.4561" cy="16.8572" rx="16.4561" ry="16.8572" transform="translate(5.14249 0)" fill="#1ABCFE"/>
              </g>
            </g>
          </g>
        </svg>
      </el-col>
    </el-row>

    <el-menu mode="vertical" @select="handleClick" v-bind:default-active="index" router="true">
      <el-menu-item index="oneMain"><b>设计原则</b></el-menu-item>
      <el-menu-item index="oneNavigation"><b>导航</b></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'OneAside',
  data: function () {
    return {
      index: 'oneMain'
    }
  },
  created () {
    this.index = this.$route.path
  },
  methods: {
    handleClick (key, keyPath) {
      console.log(key, keyPath)
      this.index = key
    }
  }
}
</script>

<style scoped>
  .el-menu{
    background-color: white;
  }
  .el-row{
    padding-top: 50px;
  }
  .el-menu{
    padding-top: 20px;
  }
</style>
