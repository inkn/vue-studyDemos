<template>
    <li>
        <p>{{comment.name}} 说：</p>
        <p>{{comment.content}}</p>
        <a href="javescript:void(0)" @click="remove(index)">删除</a>
    </li>
</template>
<script>
export default {
    props: {
        comment: Object,
        index: Number,
        removeComment: Function
    },
    methods: {
        remove(index) {
            this.removeComment(index)
        }
    }
}
</script>
