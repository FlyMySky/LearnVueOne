<template>

  <div class="one-main">
      <div class="title-align">
        <h2>设计原则</h2>
      </div>
      <el-row gutter="10" justify="start" type="flex">
        <el-col :span="4">
          <el-button type="primary" plain>
            <div class="single_div">
              <span><img src="../../assets/one-yizhi.png"/></span>
              <div>一致</div>
              <div>Consistency</div>
            </div>
          </el-button>
        </el-col>

        <el-col :span="4">
          <el-button type="primary" plain>
            <div class="single_div">
              <span><img src="../../assets/one-fankui.png"/></span>
              <div>反馈</div>
              <div>Feedback</div>
            </div>
          </el-button>
        </el-col>

        <el-col :span="4">
          <el-button type="primary" plain>
            <div class="single_div">
              <span><img src="../../assets/one-xiaolv.png"/></span>
              <div>效率</div>
              <div>Efficiency</div>
            </div>
          </el-button>
        </el-col>

        <el-col :span="4">
          <el-button type="primary" plain>
            <div class="single_div">
              <span><img src="../../assets/one-kekong.png"/></span>
              <div>可控</div>
              <div>Controllability</div>
            </div>
          </el-button>
        </el-col>
      </el-row>

    <div class="title-align">
      <h3>一致性 Consistency</h3>
      <ul>
        <li>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</li>
        <li>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</li>
      </ul>
    </div>

    <div class="title-align">
      <h3>反馈 Feedback</h3>
      <ul>
        <li>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</li>
        <li>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</li>
      </ul>
    </div>
    <div class="title-align">
      <h3>效率 Efficiency</h3>
      <ul>
        <li>简化流程：设计简洁直观的操作流程；</li>
        <li>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</li>
        <li>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</li>
      </ul>
    </div>
    <div class="title-align">
      <h3>可控 Controllability</h3>
      <ul>
        <li>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</li>
        <li>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'OneMain'
}
</script>

<style scoped>

  .one-main{
    margin-top: 50px;
  }
  .el-row{
    margin-top: 50px;
  }
  .title-align{
    margin: 40px;
    text-align: start;
  }
  .el-col{
    width: 200px;
  }
  .single_div{
    text-align: center;
  }
  img{
    width: 80px;
    height: 80px;
  }

</style>
