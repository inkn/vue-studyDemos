<template>
  <!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer" v-show="todos.length>0">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{getRemainCount}}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <!-- <ul class="filters">
      <li>
        <a :class="{selected: filterText === ''}" href="#/">All</a>
      </li>
      <li>
        <a :class="{selected: filterText === 'active'}" href="#/active">Active</a>
      </li>
      <li>
        <a :class="{selected: filterText === 'completed'}" href="#/completed">Completed</a>
      </li>
    </ul> -->
     <ul class="filters">
      <li>
        <a :class="{selected: showType==='all'}" href="#/" @click="changeShowType('all')">All</a>
      </li>
      <li>
        <a :class="{selected: showType==='active'}" href="#/active"  @click="changeShowType('active')">Active</a>
      </li>
      <li>
        <a :class="{selected: showType==='completed'}" href="#/completed"  @click="changeShowType('completed')">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" @click="removeAllCompleted" v-show="getRemainCount<todos.length">Clear completed</button>
  </footer>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
  props: {
    todos: Array
  },
  data() {
    return {
      showType: 'all'
    }
  },
  computed: {
    getRemainCount() {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods: {
    removeAllCompleted() {
      PubSub.publish('removeAllCompleted')
    },
    changeShowType(type) {
      this.showType = type
      PubSub.publish('changeShowType',type)
    }
  }
}
</script>
