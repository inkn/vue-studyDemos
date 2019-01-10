<template>
  <header class="header">
    <h1>todos</h1>
    <!-- <input class="new-todo" placeholder="What needs to be done?" @blur="clearBar" @keydown.enter="addTodo" v-focus> -->
    <input class="new-todo" placeholder="What needs to be done?" @keydown.enter="add" v-model="title" v-focus>

  </header>
</template>
<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add() {
      // 1. 检查数据合法性
      const title = this.title.trim()
      if (!title) return
      // 2. 根据title创建todo对象
      const todo = {
        title,
        completed: false
      }
      // 3. 添加到todos
      this.todos.push(todo)
      // 4. 清除输入
      this.title = ""
    }
  },
  props: {
    todos: Array
  },
  directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
  }
}
</script>
