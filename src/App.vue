<template>
    <div id="app">
        <div class="header">
            {{message}}
        </div>
        <div class="footer">
            <h2>底部</h2>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        message: "头部导航部分内容"
      }
    }
  }
</script>

<style>
    /*#app {*/
    /*    background-color: aquamarine;*/
    /*}*/
    /*.header {*/
    /*    height: 56px;*/
    /*    width: 100%;*/
    /*    font-size: 30px;*/
    /*}*/
</style>
