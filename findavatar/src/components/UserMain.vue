<template>
  <div>
    <h2 v-if="status==='init'">输入要查找的用户名</h2>
    <h2 v-show="status==='loading'">Loading...</h2>
    <ul v-show="status==='loaded'">
      <li class="user" v-for="(user,index) in users" :key="index">
        <a :href="user.url">
          <img :src="user.avatar" width="200" :alt="user.avatar">
        </a>
        <p>{{user.name}}</p>
      </li>
    </ul>
    <h2 v-if="status==='error'">查找失败</h2>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data() {
      return {
        users: [],
        status: 'init'
      }
    },
    mounted() {
      PubSub.subscribe('search', (mes, searchName) => {

        this.status = 'loading'
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
        .then(response => {
          const result = response.data
          this.users = result.items.map(user => ({
            url: user.html_url,
            avatar: user.avatar_url,
            name: user.login
          }))
          this.status = 'loaded'

        })
        .catch(err => {
          this.status = 'error'
          console.log(err+"------------")
        })

      })
    }
  }
</script>

<style>
  .user {
    float: left;
    width: 200px;
    height: 400px;
  }
</style>