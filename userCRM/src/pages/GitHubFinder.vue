<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        
        <h1>GitHub Finder</h1>

        <Search 
          :value="search" 
          placeholder="Type username..."
          @search="search = $event"
        />
        <button class="btn btnPrimary" @click="getRepos">Поиск</button>

        <div class="repos__wrapper" v-if="repos">
          <div class="repos-info" v-for="repo in repos" :key="repo.id">
            <a class="link" target="_blank" :href="repo.html_url">{{ repo.name }}</a>
            <p>{{ repo.stargazers_count }}⭐</p>
          </div>
        </div>
        <p v-if="error">{{ error }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

import Search from '@/components/Search'

export default {
  components: {
    Search
  },
  data() {
    return {
      search: '',
      error: null,
      repos: null
    }
  },
  methods: {
    getRepos() {
      axios.get(`https://api.github.com/users/${this.search}/repos`) // https://api.github.com/users/cyberpunk10
        .then(res => {
          this.repos = res.data
          this.error = null
          console.log(this.repos)
        })
        .catch(err => {
          console.log(err)
          this.repos = null
          this.error = 'Can`t find this user'
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
.btn
  margin: 2rem

.link
  border: none
.repos_wraper
  margin: 30px 0
.repos-info
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 10px
  padding: 10px
  border-bottom: 1px solid #dbdbdb
</style>