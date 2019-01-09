<template>
    <ul style="float:left;border: 1px solid #ccc;width:300px;margin-left:30px">
        <CommentItem v-for="(comment,index) in comments" 
        :comment="comment" 
        :index="index"
        :key="index"
        :removeComment="removeComment"/>
    </ul>
</template>
<script>
import CommentItem from './CommentItem.vue'
export default {
     props: ['comments','removeComment'],
    components: {CommentItem}
   
}
</script>
