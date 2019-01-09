<template>
  <div style="float:left;">
    用户名：<br>
    <input type="text" v-model="name"> <br>
    评论：<br>
    <textarea v-model="content" cols="30" rows="10"></textarea> <br>
    <button @click="add">添加评论</button>
  </div>
</template>
<script>
  export default {
    props: {
      addComment: Function
    },
    data() {
      return {
        name: '',
        content: ''
      }
    },
    methods: {
      add() {
        // 1. 拿到数据并校验
        var name = this.name.trim()
        var content = this.content.trim()
        if (!name || !content) {
          alert('用户名或评论不能为空')
          return
        }
        // 2. 调用父组件传过来的方法，实现添加
        var comment = {
          name,
          content
        }
        this.addComment(comment)
      }
    }
  }
</script>