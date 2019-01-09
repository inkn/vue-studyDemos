<template>
  <div>
    <h1>评论页面</h1>
    <AddComment :addComment="addComment"/>
    <CommentList :comments="comments" :removeComment="removeComment"/>
  </div>
</template>
<script>
  import CommentList from './components/CommentList.vue'
  import AddComment from './components/AddComment.vue'
  export default {
    data() {
      return {
        comments: [{
            name: '小面馆',
            content: '不少地方静安寺'
          },
          {
            name: '小狗',
            content: '不少地方静安寺'
          },
          {
            name: '小欢',
            content: '埃里克空间'
          },
        ]
      }
    },
    methods: {
        addComment(comment) {
            this.comments.unshift(comment)
        },
        removeComment(index) {
            this.comments.splice(index,1)
        }
    },
    components: {
      AddComment,
      CommentList
    }
  }
</script>
<style>

</style>