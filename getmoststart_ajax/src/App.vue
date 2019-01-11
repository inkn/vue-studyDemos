<template>
    <div>
        <div v-if="!repoUrl">loading...</div>
        <div v-else> The most popular is <a :href="repoUrl">{{repoName}}</a></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            repoUrl: '',
            repoName: ''
        }
    },
    mounted() {
        const url = `https://api.github.com/search/repositories?q=v&sort=stars`
        this.$http.get(url).then(response => {
            const result = response.data
            this.repoUrl = result.items[0].html_url
            this.repoName = result.items[0].name
        }, respone => {
            alert('请求失败！')
        })
    }
}
</script>
