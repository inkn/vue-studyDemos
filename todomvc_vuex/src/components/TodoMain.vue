<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main" v-show="todos.length>0">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allTodoStatus">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li :class="{ completed: todo.completed, editing: todo === currentEditing }" v-for="(todo,index) in todoList" :key="index"
        @dblclick="changeCurrent(todo)">
        <TodoItem :todo="todo" :index="index" />
        <input class="edit" v-autofocus :value="todo.title" @keydown.enter="edit(index,$event.target.value)"
          @keydown.esc="clearCurrent" @blur="clearCurrent">  
          <!-- 这里的 input 写在 TodoItem 里就没法自动聚焦  v-autofocus无效 -->
      </li>

    </ul>
  </section>
</template>
<script>
  import TodoItem from './TodoItem.vue'
  import {mapState, mapActions, mapGetters} from 'vuex'
  import localStorageUtil from '../../static/js/localStorageUtil'


  export default {
    data() {
      return {
        currentEditing: null,
      }
    },
    computed: {
      ...mapState(['todos']),
      ...mapGetters(['todoList']),
      allTodoStatus: {
        get() {
          // console.log(this.$store.getters.isAllCompleted) //false
          // console.log(mapActions(['isAllCompleted']))  //{isAllCompleted: ƒ}
                                                        // isAllCompleted: ƒ mappedAction()
                                                        // __proto__: Object
          return this.$store.getters.isAllCompleted
          
        },
        set(newValue) {
          this.$store.dispatch('setAllstatus', newValue)
        }
      }
    },watch: {
      todos: {
        deep: true,
        handler(todos) {
          localStorageUtil.setItem('todos',todos)
        }
      }
    },
    components: {
      TodoItem
    },
    methods: {
      changeCurrent(todo) {
        this.currentEditing = todo
      },
      clearCurrent() {
        this.currentEditing = null
      },
      edit(index, title) {
        // 1. 校验数据 为空就删除该todo
        const tilte = title.trim()
        if (!title) {
          this.$store.dispatch('removeTodo', index)
          return
        }
        // 2. 更新数据
        this.$store.dispatch('updateTodo', {index, title})  //注意这里 dispatch 只接受两个参数 所以不能写成 ('updateTodo',index, title)
        // 2. 清除currentEditing 取消焦点
        this.currentEditing = null
      }
     
    },
    directives: {
      autofocus: {
        update(el) {
          el.focus()
        }
      }
    }
  }
</script>