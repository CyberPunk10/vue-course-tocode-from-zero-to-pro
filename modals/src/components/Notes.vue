<template>
  <div class="notes">
    <div class="note" :class="{full: !grid}" v-for="(note, index) in notes" :key="index">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <p class="close" style="cursor: pointer;" @click="removeNote(index)">+</p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    removeNote(index) {
      console.log('remove ', index)
      this.$emit('remove', index)
    }
  }
}
</script>

<style lang="sass">
.notes
  display: flex
  justify-content: space-between
  align-items: center
  flex-wrap: wrap
  padding: 40px 0

.note
  width: 46%
  padding: 18px 20px
  margin-bottom: 20px
  background-color: #fff
  transition: all .2s cubic-bezier(.02, .01, .47, 1)
  &.full
    width: 100%
  &:hover
    box-shadow: 0 30px 30px rgba(0,0,0, .02)

.note-header
  display: flex
  justify-content: space-between
  align-items: center
  h1
    font-size: 32px
  p
    color: #402caf
    font-size: 22px
  p.close
    transform: rotate(45deg)
    font-size: 32px
  svg
    margin-right: 12px
    color: #999
    &:last-child
      margin-right: 0
    &.active
      color: #402caf

.note-body
  p
    margin: 20px auto
  span
    font-size: 14px
    color: #999

</style>