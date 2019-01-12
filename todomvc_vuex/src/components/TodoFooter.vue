<template>
    <!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer" v-show="todos.length>0">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{getRemainCount}}</strong> item left</span>
     <ul class="filters">
      <li>
        <a :class="{selected: type==='all'}" href="#/" @click="changeShowType('all')">All</a>
      </li>
      <li>
        <a :class="{selected: type==='active'}" href="#/active"  @click="changeShowType('active')">Active</a>
      </li>
      <li>
        <a :class="{selected: type==='completed'}" href="#/completed"  @click="changeShowType('completed')">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" @click="removeAllCompleted" v-show="getRemainCount<todos.length">Clear completed</button>
  </footer>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    // getRemainCount() {
    //   return this.$store.getters.getRemainCount
    // } 

    ...mapState(['todos','type']),
    ...mapGetters(['getRemainCount'])
  },
  methods: {
    // removeAllCompleted() {
    //   this.$store.dispatch('removeAllCompleted')
    // },  //可以写成 >
    ...mapActions(['removeAllCompleted','changeShowType']),  // ----> {removeAllCompleted: function(){ this.$store.dispatch('removeAllCompleted')} }

  }
}
</script>
