<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="notify__wrapper">
          
          <!-- title -->
          <div class="notify__title">
            <p class="title">Notify page</p>
          </div>

          <!-- content -->
          <div class="notify__content">
            <Preloader v-if="loading" :width="60" :heigth="60"/>
            <Notify v-if="!loading" :messages="messages"/>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Notify from '@/components/Notify'
import Preloader from '@/components/UI/Preloader'

export default {
  components: {
    Notify, Preloader
  },
  data () {
    return {
      loading: false,
      messages: [
        { title: 'message 1' },
        { title: 'message 2' },
        { title: 'message 3' },
        { title: 'message 4' },
        { title: 'message 5' },
        { title: 'message 6' },
      ]
    }
  },
  created() {
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style lang="sass" scoped>
.container
  display: flex
  justify-content: center
  align-items: center
  height: 90vh

.notify__wrapper
  width: 400px
  background-color: #fff
  padding: 30px
  border-radius: 16px
  box-shadow: 0 12px 22px 0 rgba(0,0,0,.1)

.notify__title p
  font-size: 24px

.notify__content
  display: flex
  align-items: center
  flex-direction: column
  min-height: 300px


</style>