<template>
  <div>
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <label v-text="todo.title"></label>
      <button class="destroy" @click="remove"></button>
    </div>
    <input class="edit" v-autofocus :value="todo.title" @keydown.enter="edit">
  </div>
</template>
<script>
import PubSub from 'pubsub-js'
  export default {
    props: {
      todo: Object,
      index: Number,
      removeTodo: Function,
      currentEditing: Object
    },
    data() {
      return {
        _currentEditing : this.currentEditing
      }
    },
    methods: {
      remove() {
        this.removeTodo(this.index)
      },
      edit(event) {
        // 1. 校验数据
        const title = event.target.value.trim()
        // 2. 为空删除
        if (!title) {
          PubSub.publish('removeTodo', this.index)
          return
        }
        // 3. 不为空修改
        this.todo.title = title
        // 4. 退出编辑样式
        // this.currentEditing = null  子组件不能修改父组件传过来的值
        this.$emit('clearEdting')  //自定义事件  父子组件间传值
      }
    },
    directives: {
     autofocus: {     //不起作用
				update: function (el) {
          el.focus()
				}
			}
  }

  }
</script>