<template>
  <div>
    <h1>Search Github User</h1>
    <input type="text" placeholder="please input name" v-model="name">
    <button @click="search" >Search</button>
  </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
   data() {
      return {
        name: ''
      }
    },
  methods: {
    search() {
      const name = this.name.trim()
      if (!name) return
      PubSub.publish('search',name)
    }
  }
}
</script>
