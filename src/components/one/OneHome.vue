<template>
  <div>
    <el-row gutter="20">
      <el-col :span="6">
        <one-aside></one-aside>
      </el-col>
      <el-col :span="18">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OneAside from '@/components/one/OneAside'
export default {
  name: 'OneHome',
  components: {OneAside}
}
</script>

<style scoped>

</style>
