<template>
  <div>
    <section class="todoapp">
      <TodoHeader :todos="todos" />
      <TodoList :todos="todos" :todolist="todolist" :removeTodo="removeTodo" />
      <TodoFooter :todos="todos" />
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
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import PubSub from 'pubsub-js'
  import LocalStorageUtil from '../static/js/localStorageUtil.js'
  export default {
    data() {
      return {
        todos: LocalStorageUtil.getItem('todos'),
        showType: 'all'
      }

    },
    methods: {
      removeTodo(index) {
        this.todos.splice(index, 1)
      }
    },
    computed: {
      todolist() {
        switch (this.showType) {
          case 'all':
            return this.todos
            break
          case 'active':
            return this.todos.filter(todo => !todo.completed)
            break
          case 'completed':
            return this.todos.filter(todo => todo.completed)
            break
          default:
            return this.todos

        }
      }
    },
    watch: {
      todos: {
        deep: true,
        handler(todos) {
          LocalStorageUtil.setItem('todos',todos)
        }
      }
    },
    mounted() {
      PubSub.subscribe('removeAllCompleted', (mes, data) => {
        this.todos = this.todos.filter(todo => !todo.completed)
      })

      PubSub.subscribe('removeTodo', (mes, index) => {
        this.todos.splice(index, 1)
      })

      PubSub.subscribe('setAllStatus', (mes, isCompleted) => {
        this.todos.forEach(todo => todo.completed = isCompleted) //不要写成foreach了！！！！！
      })
      
      PubSub.subscribe('changeShowType',(mes,type) => {
        this.showType = type
      })
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>