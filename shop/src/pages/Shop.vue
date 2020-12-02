<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        
        <h1>Shop page</h1>

      </div>
    </section>
  </div>
</template>

<script>
// import item from '@/components/ShopItem'

export default {
  components: {
    // item
  },
  data () {
    return {
      shopList: null
    }
  },
  created() {
    this.shopList = this.$store.getters.getShopList
    console.log(this.shopList)
  },
  computed: {
    getMessage () {
      return this.$store.getters.getMessage
    }
  },
  methods: {
    setMessage() {
      this.$store.dispatch('setMessage', this.message)
    }
  }
}
</script>