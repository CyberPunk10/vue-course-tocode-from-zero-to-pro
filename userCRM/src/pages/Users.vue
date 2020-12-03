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
              <th>Name</th>
              <th>username</th>
              <th>Company name</th>
            </tr>
          </thead>
          
          <!-- tbody -->
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.company.name }}</td>
            </tr>
          </tbody>

        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    // ShopItem
  },
  data () {
    return {
      users: null
    }
  },
  created() {
    // this.users = this.$store.getters.getUsers
    // console.log(this.users)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          console.log(response.data)
          this.users = response.data
        })
        .catch(err => {
          console.log(err)
        })
  },
  computed: {
    // getMessage () {
    //   return this.$store.getters.getMessage
    // }
  },
  methods: {
    // setMessage() {
    //   this.$store.dispatch('setMessage', this.message)
    // }
  }
}
</script>

<style lang="sass">
.item__wrapper
  display: flex
  justify-content: space-between
  align-items: center
</style>