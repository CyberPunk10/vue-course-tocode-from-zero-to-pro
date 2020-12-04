<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Modals Page</h1>

        <!-- First modal -->
        <button 
          class="btn btnPrimary" 
          @click="modalFirst = !modalFirst"
        >Show first modal</button>

        <Modal 
          v-show="modalFirst" 
          :title="titleFirstmodal"
          @close="modalFirst = false"
        >
          <div slot="body">
            <p>Text test</p>
            <button 
              class="btn btnPrimary" 
              @click="modalFirst = false"
            >Well Done!</button>
          </div>

          <div slot="footer">
            <p>Footer</p>
          </div>

        </Modal>

        <!-- Second modal -->
        <button 
          class="btn btnPrimary" 
          @click="modalSecond.show = !modalSecond.show"
        >Show modal with form</button>

        <Modal 
          v-show="modalSecond.show" 
          title="Modal with form"
          @close="modalSecond.show = false"
        >
          <div slot="body">
            <form @submit.prevent="submitSecondForm">
              <label>Name:</label>
              <input type="text" v-model="modalSecond.name">
              <label>Email:</label>
              <input type="email" v-model="modalSecond.email">
              <button 
                class="btn btnPrimary"
              >Submit</button>
            </form>
          </div>

        </Modal>

        <!-- Modal with Validate -->
        <button 
          class="btn btnPrimary" 
          @click="modalValidate = !modalValidate"
        >Show modal with form + validate</button>
        <ModalValidate v-show="modalValidate" @close="modalValidate = false"/>   

      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

import Modal from '@/components/UI/Modal'
import ModalValidate from '@/components/ModalValidate'

export default {
  components: {
    Modal, ModalValidate
  },

  data() {
    return {
      titleFirstmodal: 'First modal',
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false
    }
  },

  methods: {
    submitSecondForm() {
      console.log(this.modalSecond.name, this.modalSecond.email)
      this.modalSecond.name = this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}
</script>


<style lang="sass" scoped>
.container

  height: 80vh
.btn
  margin: 1rem 1rem 0 0
</style>