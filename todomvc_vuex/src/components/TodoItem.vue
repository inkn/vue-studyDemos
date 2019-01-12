<template>
     <div>
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <label v-text="todo.title"></label>
      <button class="destroy" @click="removeTodo(index)"></button>
    </div>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  props: {
    todo: Object,
    index: Number,
  },
  methods: {
     ...mapActions(['removeTodo'])
  }

}

</script>

