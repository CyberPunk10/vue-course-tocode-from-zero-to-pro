<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">

            <Message v-if="message" :message="message"/>
            <NewNote :note="note" @addNote="addNote"/>

            <div class="note-header">
              <h1>{{ title }}</h1>

              <Search
                :value="search"
                placeholder="Find your notes"
                @search="search = $event"
              />

              <div class="icons">
                <svg :class="{active: grid}" @click="grid = true" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <svg :class="{active: !grid}" @click="grid = false" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
              </div>
            </div>

            <Notes :notes="notesFilter" @remove="removeNote" :grid="grid"/>

        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Message from './components/Message.vue'
import NewNote from '@/components/NewNote.vue'
import Notes from '@/components/Notes.vue'
import Search from '@/components/Search.vue'

export default {
  components: {
    Message, NewNote, Notes, Search
  }, 
  data() {
    return {
      title: 'Notes App',
      message: null,
      grid: true,
      note: {
        title: '',
        descr: ''
      },

      search: '',

      notes: [
        {
          title: 'First Note',
          descr: 'Description for first note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Second Note',
          descr: 'Description for second note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Third Note',
          descr: 'Description for third note',
          date: new Date(Date.now()).toLocaleString()
        },
      ]
    }
  },
  computed: {
    notesFilter() {
      let array = this.notes,
          search = this.search
      if(!search) return array

      search = search.trim().toLowerCase()

      // filter
      array = array.filter(item => {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item
        }
      })

      // if Error, else return array
      return array
    }
  },
  methods: {
    addNote() {
      let {title, descr} = this.note

      if (title === '') {
        this.message = 'Title can`t be blank!'
        return false
      }

      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString()
      })
      
      this.note.title = this.note.descr = ''
      this.message = null
    },

    removeNote(index) {
      this.notes.splice(index, 1) // с какого index начать и сколько вырезать
    }
  }
}
</script>

<style>

</style>
