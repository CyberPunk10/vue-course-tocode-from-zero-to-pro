<template>
  <p class="message">Message component - {{ message }}</p>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>