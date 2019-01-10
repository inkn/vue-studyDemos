<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main" v-show="todos.length>0">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allTodoStatus">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li :class="{ completed: todo.completed, editing: todo ===currenEditing }" v-for="(todo,index) in todolist" :key="index" @dblclick="currenEditing=todo">
        <TodoItem :todo="todo" :index="index" :removeTodo="removeTodo" :currenEditing="currenEditing" @clearEdting="clearEdting"/>
      </li>

    </ul>
  </section>
</template>
<script>
  import TodoItem from './TodoItem.vue'
  import PubSub from 'pubsub-js'
  export default {
    data() {
      return {
        currenEditing: null
      }
    },
    computed: {
      allTodoStatus: {
        get() {
          return this.todos.every(todo => todo.completed)
        },
        set(newValue) {
          PubSub.publish('setAllStatus',newValue)
        }
      }
    },
    methods: {
      clearEdting() {
        this.currenEditing = null
      }
    },
    props: {
      todos: Array,
      removeTodo: Function,
      todolist: Array
    },
    components: {
      TodoItem
    }
  }
</script>