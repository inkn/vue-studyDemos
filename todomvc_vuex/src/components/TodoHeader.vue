<template>
    <header class="header">
    <h1>todos</h1>
    <!-- <input class="new-todo" placeholder="What needs to be done?" @blur="clearBar" @keydown.enter="addTodo" v-focus> -->
    <input class="new-todo" placeholder="What needs to be done?"v-focus @keydown.enter="addTodo" v-model="title">

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
    addTodo() {
      // 1. 获取并校验tilte
      const title = this.title.trim()
      if (!title) return
      // 2. 根据title创造todo对象
      const todo = {
        title,
        completed: false
      }
      // 3. dispatch 通知 action 调用 addTodo方法
      this.$store.dispatch('addTodo', todo)
      // 4. 清空输入
      this.title = ''
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }
}
</script>

