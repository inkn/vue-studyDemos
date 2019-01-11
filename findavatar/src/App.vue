<template>
<div>
    <Search/>
    <UserMain/>
</div>
    
</template>
<script>
  import Search from './components/Search.vue'
  import UserMain from './components/UserMain.vue'

  export default {

    components: {
      Search,
      UserMain
    }
  }
</script>