<template>
  <div>
    <section class="todoapp">
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <!-- Remove the below line ↓ -->
      <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
      <!-- Change this out with your name and url ↓ -->
      <p>Created by <a href="http://todomvc.com">you</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>
<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoMain from './components/TodoMain.vue'
  import TodoFooter from './components/TodoFooter.vue'
  export default {
    components: {
      TodoHeader,
      TodoMain,
      TodoFooter
    },
    mounted() {
        this.$store.dispatch('reqTodos')
    }
  }
</script>