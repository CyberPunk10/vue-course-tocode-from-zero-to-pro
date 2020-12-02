<template>
  <Modal 
    title="Modal with form + validate"
    @close="$emit('close')"
  >
    <div slot="body">
      <form @submit.prevent="onSubmit">

        <!-- name -->
        <div class="form-group">
          <label>Name:</label>
          <input 
            v-model.trim="name"
            :class="{error: ($v.name.$dirty && !$v.name.required) 
              || ($v.name.$dirty && !$v.name.minLength)}"
          >
          <p class="error-text" v-if="$v.name.$dirty && !$v.name.required">
            Field is required</p>
          <p class="error-text" v-if="$v.name.$dirty && !$v.name.minLength">
            Name must have at least {{ $v.name.$params.minLength.min }} letters. 
            Сейчас: {{ name.length }}</p>
        </div>

        <!-- email -->
        <div class="form-group">
          <label>Email:</label>
          <input 
            v-model.trim="email"
            :class="{error: ($v.email.$dirty && !$v.email.required)
              || ($v.email.$dirty && !$v.email.email)}"
          >
          <p class="error-text" v-if="$v.email.$dirty && !$v.email.required">
            Field is required</p>
          <p class="error-text" v-if="$v.email.$dirty && !$v.email.email">
            Email is not correct</p>
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
    onSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email
        }
        console.log(user)
      }
    }
  }
}
</script>

<style lang="sass">
.form-group .error-text
  display: none
  margin-bottom: 5px
  font-size: 13.4px
  color: rgb(222,64,64)
.form-group .error + .error-text
  display: block
input.error
  margin-bottom: .4rem
  border-color: rgb(222,64,64)

</style>