<template>
  <Modal 
    title="Modal with form + validate"
    @close="$emit('close')"
  >
    <div slot="body">
      <form @submit.prevent="">

        <!-- name -->
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
          <label>Name:</label>
          <input 
            v-model="name" 
            v-model.trim="$v.name.$model"
            :class="{error: $v.name.$error}"
            @change="$v.name.$touch()"
          >
          <p class="error-text" v-if="!$v.name.required">Field is required</p>
          <p class="error-text" v-if="name < $v.name.minLength">error</p>
        </div>

        <!-- email -->
        <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
          <label>Email:</label>
          <input 
            v-model="email" 
            v-model.trim="$v.email.$model"
            :class="{error: $v.email.$error}"
            @change="$v.name.$touch()"
          >
          <p class="error-text" v-if="!$v.email.required">error</p>
        </div>

        <button class="btn btnPrimary">Submit</button>

      </form>
    </div>
  </Modal>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import Modal from '@/components/UI/Modal'

export default {
  components: {
    Modal
  },
  data() {
    return {
      name: '',
      email: '',
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      email
    }
    // age: {
    //   between: between(20, 30)
    // }
  },
  methods: {
    
  }
}
</script>