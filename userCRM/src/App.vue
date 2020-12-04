<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE CLI</div>
            <ul class="navbar-list">
              <li 
                class="navbar-item" 
                v-for="link in links" :key="link.title"
              >
                <router-link 
                  :to="link.url"
                  :title="link.title"
                  class="navbar-link"
                >{{ link.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  components: {

  }, 
  data() {
    return {
      links: [
        {title: 'Home', url: '/'},
        {title: 'Shop', url: '/shop'},
        {title: 'Users', url: '/users'},
        {title: 'Notify', url: '/notify'},
        {title: 'GitHubFinder', url: '/gitHubFinder'}
      ]
    }
  },
  computed: {

  },
  methods: {
    
  }
}
</script>

<style lang="sass" scoped>
.navbar-item
  .router-link-exact-active
    color: red

</style>