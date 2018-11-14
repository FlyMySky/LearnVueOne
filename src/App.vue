<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <!--<el-container direction="vertical">-->
      <!--<el-header>-->
        <!--<sk-header></sk-header>-->
      <!--</el-header>-->
      <!--<el-container direction="horizontal">-->
        <!--<el-aside>-->
          <!--<one-aside></one-aside>-->
        <!--</el-aside>-->
        <!--<el-main>-->
          <!--<router-view/>-->
        <!--</el-main>-->
      <!--</el-container>-->
    <!--</el-container>-->
    <el-row>
      <sk-header></sk-header>
    </el-row>
    <!--<el-row gutter="20">-->
      <!--<el-col :span="6">-->
        <!--<one-aside></one-aside>-->
      <!--</el-col>-->
      <!--<el-col :span="18">-->
        <!--<router-view/>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <el-row>
      <router-view/>
    </el-row>
  </div>
</template>

<script>
import SkHeader from './components/SkHeader'
import OneAside from '@/components/one/OneAside'
import OneMain from '@/components/one/OneDesign'
export default {
  name: 'App',
  components: {OneMain, OneAside, SkHeader}
}
</script>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    position: fixed;
    height: 100%;
    width: 100%;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
  }

  .el-container {
    background-color: beige;
  }

  .el-header {
    background-color: white;
  }

  .el-aside {
    background-color: white;
    position: fixed;
    margin: 0;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .el-main {
    background-color: aqua;
    height: 100%;
  }
</style>
