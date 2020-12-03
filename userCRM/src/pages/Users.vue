<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Users page</h1>

        <!-- table -->
        <table>

          <!-- thead -->
          <thead>
            <tr>
              <th @click="sort('name')">Name</th>
              <th @click="sort('username')">username</th>
              <th @click="sort('companyName')">Company name</th>
            </tr>
          </thead>
          
          <!-- tbody -->
          <tbody>
            <tr v-for="user in usersSort" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.company.name }}</td>
            </tr>
          </tbody>

        </table>
        <p> debug: sort: {{ currentSort }}, sortDir: {{ currentSortDir }} </p>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPage">&#8592;</div>
          <div class="btn btnPrimary" @click="nextPage">&#8594;</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {

  },
  data () {
    return {
      users: [],
      currentSort: 'name',
      currentSortDir: 'acs',
      page: {
        current: 1,
        length: 3
      }
    }
  },
  created() {
    // this.users = this.$store.getters.getUsers
    // console.log(this.users)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.users = response.data
        })
        .catch(err => {
          console.log(err)
        })
  },
  computed: {
    usersSort() {
      return this.users.sort((a, b) => {
        let mod = 1
        if (this.currentSortDir === 'desc') mod = -1
        if (this.currentSort === 'companyName') {
          if (a.company.name > b.company.name) return -1 * mod
          if (a.company.name < b.company.name) return 1 * mod
        } else {
          if (a[this.currentSort] > b[this.currentSort]) return -1 * mod
          if (a[this.currentSort] < b[this.currentSort]) return 1 * mod
        }
        return 0        
      }).filter((row, index) => {
        let start = (this.page.current-1) * this.page.length
        let end = this.page.current * this.page.length
        if (index >= start && index < end) return true
      })
    }
  },
  methods: {
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = e
    },

    // Pagination
    prevPage() {
      if (this.page.current > 1) this.page.current--
    },
    nextPage() {
      if (this.page.current * this.page.length < this.users.length) this.page.current++
    }
  }
}
</script>

<style lang="sass">
.item__wrapper
  display: flex
  justify-content: space-between
  align-items: center

.button-list
  width: 100%
  text-align: center
  .btn
    margin: 0 20px
</style>