<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          
          <!-- slider -->
          <div class="product__slider">
            <carousel 
              :perPage="1"
              :paginationEnable="true"
              paginationColor="#b3b3b3"
              paginationActiveColor="#494ce8"
            >
              <slide v-for="(slide, index) in product.gallery" :key="index">
                <img :src="slide.img" :alt="slide.name">
              </slide>
            </carousel>
          </div>
          
          <!-- content -->
          <div class="product__content">
            <h1 class="title">Product {{ product.title }}</h1>
            <p>{{ product.descr }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null
    }
  },
  created() {
    const id = this.$route.params.id
    this.product = this.$store.getters.getProduct(id)
  }
}
</script>

<style lang="sass" scoped>
.product
  &__wrapper
    display: flex
    justify-content: space-between
    align-items: center
  &__slider,
  &__content
    max-width: 48%
    // text-align: center

.VueCarousel-inner
  visibility: visible !important
  flsx-basis: 100% !important
  width: 100% !important

</style>