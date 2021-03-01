<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
/* 初始化定义 */
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}
a {
  color: black;
}
small {
  color: gray;
}
/* 居中对齐 */
.item-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
/* 左右对齐 */
.item-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/* 设置页链接样式 */
/* 每个A链接的样式调整 */
.setLink a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  height: 50px;
  border-bottom: 1px solid #f3f4f8;
}
/* 分割线 */
.setLink {
  border-top: 8px solid #f3f4f8;
}
</style>
